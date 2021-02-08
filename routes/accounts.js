const express = require('express');
const accounts = express.Router();
const Account = require('../models/Account');

accounts.get('/readall', async (req, res) => {

    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (err) {
        res.json({ error: err });
        console.log(err);
    }

});

accounts.post('/', async (req, res) => {

    const account = new Account({
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        passwordsalt: req.body.passwordsalt,
        cookie: req.body.cookie,
        knowledgeTree: req.body.knowledgetree
    });

    try {
        const savedAccount = await account.save();
        res.json(savedAccount);
    } catch (err) {
        res.json({ error: err });
        console.log(err);
    }

});

module.exports = accounts;