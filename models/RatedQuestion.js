/*
* A question which can take a number between 1 and 5.
*/

const mongoose = require("mongoose");
const Question = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: Number,
        required: true,
        enums: [
            1, 2, 3, 4, 5
        ]
    }
});

module.exports = mongoose.model("students", Question);
