const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const path = require("path");

const https = require('https');
const fs = require('fs');

require('dotenv/config');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT || 3000;

/*const server = sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
}, app);*/

server.listen(port, () => {
  console.log("server starting on port : " + port)
});
    
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