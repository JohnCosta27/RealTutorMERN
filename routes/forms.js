const express = require('express');
const forms = express.Router();
const StudentFeedback = require('../models/StudentFeedback');
const Lesson = require('../models/Lesson');
const Account = require('../models/Account');

forms.post('/studentfeedback', async (req, res) => {
	try {
		const validation = await validateCookie(req.cookies.token);
		if (
			!(
				validation.level == 3 ||
				(validation.level == 1 &&
					(await studentLesson(req.body.lessonID, validation.id)) &&
					!(await studentAnswered(req.body.lessonID)))
			)
		) {
			res.json({ error: 'Authentication error' });
		} else {
			let answers = [];
			for (let q of req.body.answers) {
				answers.push({ question: q.question, answer: q.answer });
			}

			const feedback = new StudentFeedback({
				answers: answers,
				lessonID: req.body.lessonID,
			});

			const savedFeedback = await feedback.save();
			res.json(savedFeedback);
		}
	} catch (error) {
		res.json(error);
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

async function studentLesson(lessonID, studentID) {
	//Tests to see if the student has this lesson.
	const lesson = await Lesson.findById(lessonID);
	return String(lesson.studentID) == String(studentID);
}

async function studentAnswered(lessonID) {
	const feedback = await StudentFeedback.find({ lessonID: lessonID });
	if (feedback.length == 0) {
		return false;
	} else {
		return true;
	}
}

module.exports = forms;
