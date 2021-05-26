const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const Account = require('./models/Account');
//const stripe = require('stripe')('pk_test_51IgsTHJwHQjcU66C8y8UboR4W0HtFEJJTQGkCMe58M4fmu5JG4vd768Cfim2QrRPVd17QGJ4J0VrAJKqHsZCGV0e00O6cEg9Mi');
require("dotenv/config");

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on port: ' + port));

const accountsRoute = require('./routes/accounts.js');
app.use('/accounts', accountsRoute);

const specification = require('./routes/specification.js');
app.use('/spec', specification);

const formsRoute = require('./routes/forms.js');
app.use('/forms', formsRoute);

const admin = require('./routes/admin.js');
app.use('/admin', async (req, res, next) => {
	const validation = await validateCookie(req.cookies.token);
	if (validation.level == 3) {
		next();
	} else {
		res.json({error: "Validation error"});
	}
}, admin);

//Displays the front page
app.use('/', (req, res, next) => {
	if (req.path == '/') {
		//Someone visited
	}
	next();
}, express.static(path.join(__dirname, 'build')));

//Takes the others
app.get('*', (req, res) => {
	console.log(req.path);
	res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected to MongoDB');
	}
);

async function validateCookie(cookie) {
	/*
	 * Returns 0 -> Token not found
	 * 1 -> Student account
	 * 2 -> Tutor account
	 * 3 -> Manager account
	 */
	const result = await Account.findOne({ cookie: cookie });
	if (result == undefined) {
		return { level: 0, id: '' };
	} else {
		if (result.type == 'student') {
			return { level: 1, id: result._id };
		} else if (result.type == 'tutor') {
			return { level: 2, id: result._id };
		} else if (result.type == 'manager') {
			return { level: 3, id: result._id };
		}
	}
}