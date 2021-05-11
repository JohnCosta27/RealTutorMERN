const mongoose = require('mongoose');
const SessionSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    endDate: {
        type: Number,
        required: false
    },
    cookie: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('sessions', SessionSchema);

/*
    Plan -> A short plan for the lesson
    Report -> A detail report of how the lesson went
    SpecPoints -> The spec points you aim to achieve, this is a JSON tree.
    specPointsAchieved -> The ones you actually got
*/
