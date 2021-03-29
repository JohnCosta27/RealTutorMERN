const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const path = require("path");

require('dotenv/config');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const port = 3000;
app.listen(port, () => console.log("Listening on port: " + port));

const accountsRoute = require('./routes/accounts.js');
app.use('/accounts', accountsRoute);

const specification = require('./routes/specification.js');
app.use('/spec', specification);

app.use(express.static(path.join(__dirname, "build")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB");
});