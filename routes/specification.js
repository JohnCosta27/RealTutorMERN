const express = require('express');
const spec = express.Router();
const SpecificationPoint = require('../models/SpecificationPoints');
const Account = require('../models/Account');

spec.get('/getspecification', async (req, res) => {
	if (req.query.specID == null) {
		res.json({ error: 'The SpecID is not present' });
	} else {
		try {
			res.json(
				await SpecificationPoint.find({ specID: req.query.specID })
			);
		} catch (error) {
			res.json({ error: error });
		}
	}
});

spec.get('/getspecfromstudentid', async (req, res) => {
	if (req.query.studentid == null) {
		res.json({ error: 'The StudentID is not present' });
	} else {
		const validation = await validateCookie(req.cookies.token);

		if (
			!(
				validation.level > 2 ||
				(validation.level == 2 &&
					(await studentToTutor(validation.id, req.query.studentid)))
			)
		) {
			res.json({ error: 'Authentication error' });
		} else {
			try {
				const student = await Account.findById(req.query.studentid);
				res.json(
					await SpecificationPoint.find({
						specID: { $in: student.course },
					})
				);
			} catch (error) {
				res.json({ error: error });
			}
		}
	}
});

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
			return {
				level: 1,
				id: result._id,
				name: result.firstname + ' ' + result.surname,
			};
		} else if (result.type == 'tutor') {
			return {
				level: 2,
				id: result._id,
				name: result.firstname + ' ' + result.surname,
			};
		} else if (result.type == 'manager') {
			return {
				level: 3,
				id: result._id,
				name: result.firstname + ' ' + result.surname,
			};
		}
	}
}

async function studentToTutor(tutorid, studentid) {
	const tutor = await Account.findById(tutorid);
	let contains = false;
	for (let student of tutor.students) {
		if (student == studentid) {
			contains = true;
			break;
		}
	}

	return contains;
}

module.exports = spec;
