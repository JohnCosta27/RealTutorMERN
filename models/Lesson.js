const mongoose = require('mongoose');
const LessonSchema = mongoose.Schema({

    plan: {
        type: String,
        required: true
    },
    report: {
        type: String
    },
    specPoints: {
        type: Array,
        required: true
    },
    specPointsAchieved: {
        type: Array
    },
    date: {
        type: Number,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    tutorID: {
        type: String,
        required: true
    },
    title: {
        type: String
    }

});

module.exports = mongoose.model('lessons', LessonSchema);


/*
    Plan -> A short plan for the lesson
    Report -> A detail report of how the lesson went
    SpecPoints -> The spec points you aim to achieve, this is a JSON tree.
    specPointsAchieved -> The ones you actually got
*/

