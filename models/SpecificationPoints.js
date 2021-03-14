const mongoose = require('mongoose');
const specificationPointsSchema = mongoose.Schema({

    contentID: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sub_content: {
        type: Array,
        required: false
    },
    section: {
        type: String,
        required: true
    },
    specificationName: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('specificationPoint', specificationPointsSchema);