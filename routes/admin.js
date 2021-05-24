const express = require('express');
const admin = express.Router();
const Account = require('../models/Account');
const SpecificationPoints = require('../models/SpecificationPoints');
const sha256 = require('js-sha256');

//No one can access this router except admins.

admin.post('/register', async (req, res) => {
	if (
		req.body.firstname == null ||
		req.body.surname == null ||
		req.body.email == null ||
		req.body.password == null ||
		req.body.type == null
	) {
		res.json({ error: 'One or more parameters missing' });
	} else {
		try {
			//First, we need to check if this email exists.
			const accountExists = await Account.exists({
				email: req.body.email,
			});

			if (accountExists) res.json({ error: 'This email already exists' });
			else {
				const passwordsalt = randomString(16);
				const hashedPassword = sha256(req.body.password + passwordsalt);

				const account = new Account({
					firstname: req.body.firstname,
					surname: req.body.surname,
					email: req.body.email,
					password: hashedPassword,
					passwordsalt: passwordsalt,
					cookie: randomString(32),
					type: req.body.type,
				});

				try {
					const savedAccount = await account.save();
					res.json(savedAccount);
				} catch (err) {
					res.json({ error: err });
				}
			}
		} catch (error) {
			res.json({ error: error });
		}
	}
});

admin.post('/addhours', async (req, res) => {
    if (req.body.hours == null || req.body.studentid == null) {
        res.json({error: "1 or more parameters are missing"});
    } else {
        const account = await Account.findById(req.body.studentid);
        account.remainingHours += req.body.hours;
        await account.save();
        res.status(400).json({status: "OK"});
    }
});

admin.post('/addspec', async (req, res) => {

	for (let point of req.body.points) {
		const newPoint = new SpecificationPoints({
			contentID: point.contentID,
			content: point.content,
			section: point.section,
			specificationName: point.specificationName,
			sub_content: point.sub_content,
			specID: point.specID
		});
		await newPoint.save();
	}

	res.json({"status": 200});

});

function randomString(length) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	return result + new Date().getTime();
}

module.exports = admin;