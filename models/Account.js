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
    },
    knowledgeTree: {
        type: JSON,
    },
    lessons: {
        type: [JSON],
    }

});

module.exports = mongoose.model('accounts', AccountSchema);


/*
Firstname -> String
Surname -> String
Email -> String, will be used to login
Password -> String, hashed sha256
PasswordSalt -> Generated (String)
Cookie -> Generated (String)
KnowledgeTree -> JSON
*/

