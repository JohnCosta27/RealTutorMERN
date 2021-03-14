const mongoose = require('mongoose');
const specificationIndexSchema = mongoose.Schema({

    index: {
        type: String,
        required: true
    },
    sections: {
        type: JSON,
        required: true
    }
});

module.exports = mongoose.model('specificationIndex', specificationIndexSchema);