const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors())

const port = 3000;
app.listen(port, () => console.log("Listening on port: " + port));

const studentsRoute = require('./routes/students.js');
app.use('/students', studentsRoute);

const accountsRoute = require('./routes/accounts.js')
app.use('/accounts', accountsRoute);

app.get('/', (req, res) => {
    res.send("Hello world");
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB");
});