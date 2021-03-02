const express = require('express');
const accounts = express.Router();
const Account = require('../models/Account');
const Lesson = require('../models/Lesson');
const Specification = require('../models/Specification');
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

accounts.post('/login', async (req, res) => {
    
    //Validation, make sure email and password are in the request (security and all that).
    if (req.body.email == null || req.body.password == null) {
        res.json({error: "Email or password missing from request"});
    } else {
        try {
            
            const account = await Account.find({email: req.body.email});
            // If the result of the search is more than 1 (as in it found an account with that email)
            if (account.length > 0) {
                
                const hashedPassword = sha256(req.body.password + account[0].passwordsalt);
                if (hashedPassword == account[0].password) {
                    res.json({cookie: account[0].cookie});
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

/*
* Adds a lesson to the "lesson" array in an account
* Recieves: Email (To identify account), date, plan, specPoints
* Validation: Verify email is found, all fields are present, and that the specpoints provided are valid
* Sends: Confirmation or error message
*/
accounts.post('/addlesson', async (req, res) => {
    
    if (req.body.date == null || req.body.plan == null || req.body.email == null || req.body.specPoints == null) {
        res.json({error: "One or more parameters missing from the request"});
    } else {
        
        let tree = await Specification.find({specificationName: "A-level Computer Science (OCR)"});
        
        if (validateSpecPoint(tree, req.body.specPoints)) {
            
            let lesson = new Lesson({plan: req.body.plan, date: req.body.date, specPoints: req.body.specPoints});
            
            try {

                await lesson.save();

                Account.findOne({email: req.body.email}, (err, account) => {

                    if (err) res.json(error);
                    else {
                        account.lessons.push(lesson._id);
                        account.save();
                        res.json({sucess: "Lesson saved successfully"});
                    }

                });

            } catch (err) {
                res.json({ error: err });
                console.log(err);
            }
            
        } else {
            res.json({error: "1 or more specification points were invalid"});
        }
        
    }
    
});

accounts.post('/addlessonreport', async (req, res) => {
    
    if (req.body.report == null || req.body.specPointsAchieved == null || req.body.email == null || req.body.lessonID == null) {
        res.json({error: "1 or more specification points were invalid"});
    } else {
        
        let tree = await Specification.find({specificationName: "A-level Computer Science (OCR)"});
        
        if (validateSpecPoint(tree, req.body.specPointsAchieved)) {
            
            Lesson.findById(req.body.lessonID, (err, lesson) => {
                if (err) {
                    res.json(err)
                } else {
                    lesson.report = req.body.report;
                    lesson.specPointsAchieved = req.body.specPointsAchieved;
                    lesson.save();
                    res.json({success: "Lesson updated successfully"});
                }
            });
            
        } else {
            res.json({error: "Specification points incorrect"});
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

function validateSpecPoint(tree, specPoints) {
    
    try {
        
        for (let point of specPoints) {
            let validPoint = false;
            for (let headings of tree[0].sections) {
                for (let sections of headings.content) {
                    for (let subSections of sections.content) {
                        for (let content of subSections.content) {
                            if (content.contentID == point) {
                                validPoint = true;
                            }
                        }
                    }
                }
            }
            if (!validPoint) return false;
        }
        
        return true;
        
    } catch (err) {
        return false;
    }
    
}

module.exports = accounts;