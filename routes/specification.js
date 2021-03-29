const express = require('express');
const spec = express.Router();
const SpecificationPoint = require('../models/SpecificationPoints');
const Account = require('../models/Account');

spec.get('/getspecification', async (req, res) => {

    if (req.query.specID == null) {
        res.json({error: "The SpecID is not present"});
    } else {
        try {
            res.json(await SpecificationPoint.find({specID: req.query.specID}));
        } catch (error) {
            res.json({error: error});
        }
    }

});

spec.get('/getspecfromstudentid', async (req, res) => {
    if (req.query.studentid == null) {
        res.json({error: "The StudentID is not present"});
    } else {
        try {
            const student = await Account.findById(req.query.studentid);
            res.json(await SpecificationPoint.find({"specID": { $in: student.course }}));
        } catch (error) {
            res.json({error: error});
        }
    }
});

module.exports = spec;