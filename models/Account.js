const mongoose = require('mongoose');
const AccountSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordsalt: {
        type: String,
        required: true
    },
    cookie: {
        type: String,
        required: false
    },
    knowledgeTree: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('accounts', AccountSchema);


/* Username
Firstname
Surname
Email
Password
PasswordSalt
Cookie
KnowledgeTree */

