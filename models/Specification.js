const mongoose = require('mongoose');
const specificationSchema = mongoose.Schema({

    specificationName: {
        type: String,
        required: true
    },
    sections: {
        type: JSON,
        required: true
    }

});

module.exports = mongoose.model('specification', specificationSchema);