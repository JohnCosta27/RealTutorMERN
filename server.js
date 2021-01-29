const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port: " + port));

//const studentsRoute = require('./routes/students.js');
//app.use('/students', studentsRoute);

app.get('/', (req, res) => {
    res.send("Hello world");
})

const students = express.Router();
const Student = require('./models/Student');

app.use('/students', students);

students.get('/readall', async (req, res) => {

    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.json({error: err})
    }

});

mongoose.connect(process.env.DB_CONNECTION,  {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB");
});