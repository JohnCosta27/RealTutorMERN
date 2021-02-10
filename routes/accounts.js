const express = require('express');
const accounts = express.Router();
const Account = require('../models/Account');
const sha256 = require('js-sha256');

accounts.get('/readall', async (req, res) => {
    
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (err) {
        res.json({ error: err });
        console.log(err);
    }
    
});

/*
-> Register Account
-> Recieves firstname, surname, email and a password.
-> Validation: 
-> Password must be safe (Capital letter, number and symbol).
-> Valid email address
-> Firstname and surname longer than 1 letter.
*/

accounts.post('/register', async (req, res) => {
    
    if (req.body.firstname == null || req.body.surname == null || req.body.email == null || req.body.password == null) {
        res.json({error: "One or more parameters missing"});
    } else {
        try {
            
            //First, we need to check if this email exists.
            const accountExists = await Account.exists({email: req.body.email});
            
            if (accountExists) res.json({error: "This email already exists"});
            else {
                
                const passwordsalt = randomString(16);
                const hashedPassword = sha256(req.body.password + passwordsalt);
                
                const account = new Account({
                    
                    firstname: req.body.firstname,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: hashedPassword,
                    passwordsalt: passwordsalt,
                    cookie: randomString(32),
                    knowledgeTree: {}
                    
                });
                
                try {
                    const savedAccount = await account.save();
                    res.json(savedAccount);
                } catch (err) {
                    res.json({ error: err });
                    console.log(err);
                }
                
            }
            
        } catch (error) {
            res.json({error: error});
            console.log(error);
        }
    }
    
});

/*
-> Log in to existing account
-> Looks in database for the email
-> Recieves: Email, 
*/

accounts.get('/login', async (req, res) => {
    
    //Validation, make sure email and password are in the request (security and all that).
    if (req.body.email == null || req.body.password == null) {
        res.json({error: "Email or password missing from request"});
    } else {
        try {
            
            const account = await Account.find({email: req.body.email});
            
            // If the result of the search is more than 1 (as in it found an account with that email)
            if (account.length > 0) {
                
                const hashedPassword = sha256(req.body.password + account.passwordsalt);
                if (hashedPassword == account.password) {
                    res.json({cookie: account.cookie});
                } else {
                    res.json({error: "Incorrect password"});
                }
                
            } else {
                res.json({error: "This account was not found"});
            }
            
        } catch (error) {
            res.json({error: error});
            console.log(error);
        }
    }
    
});

function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = accounts;