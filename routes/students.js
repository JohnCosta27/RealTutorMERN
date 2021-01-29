const express = require('express');
const students = express.Router();
const Student = require('../models/Student');

students.get('/readall', async (req, res) => {

    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.json({error: err})
    }

});

students.post('/', async (req, res) => {
    
    const student = new Student({
        firstname: req.body.firstname,
        surname: req.body.surname
    });
    
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({error: err});
        console.log(err);
    }
    
});

module.exports = students;