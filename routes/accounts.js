const express = require('express');
const accounts = express.Router();
const Account = require('../models/Account');
const Lesson = require('../models/Lesson');
const Session = require('../models/Session');
const SpecificationPoint = require('../models/SpecificationPoints');
const Stats = require('../models/Stats');
const sha256 = require('js-sha256');

accounts.post('/login', async (req, res) => {
	//Validation, make sure email and password are in the request (security and all that).
	if (req.body.email == null || req.body.password == null) {
		res.json({ error: 'Email or password missing from request' });
	} else {
		try {
			const account = await Account.findOne({ email: req.body.email });
			// If the result of the search is more than 1 (as in it found an account with that email)
			if (account == undefined) {
				res.json({ error: 'Incorrect password' });
			} else {
				const hashedPassword = sha256(
					req.body.password + account.passwordsalt
				);
				if (hashedPassword == account.password) {
					let found = false;
					for (let session of sessions) {
						if (String(session.id) == String(account._id)) {
							refreshSession(session.cookie);
							found = true;
							break;
						}
					}

					let level;
					if (account.type == 'student') level = 1;
					else if (account.type == 'tutor') level = 2;
					else if (account.type == 'manager') level = 3;
					else level = 0;

					if (found) {
						res.json({
							cookie: account.cookie,
							level: level,
							id: account._id,
						});
					} else {
						account.cookie = randomString(32);
						account.loggedIn = true;
						addSession(
							account.cookie,
							account._id,
							new Date().getTime()
						);

						await account.save();
						res.json({
							cookie: account.cookie,
							level: level,
							id: account._id,
						});
					}
				}
			}
		} catch (error) {
			createStats({
				cookie: req.cookies.token,
				route: 'accounts',
				request: req.path,
				outcome: 500,
				date: new Date().getTime(),
			});
			res.json({ error: error });
		}
	}
});

accounts.get('/logout', async (req, res) => {
	try {
		const validation = await validateCookie(req.cookies.token);
		if (validation.id != '') {
			const account = await getAccount(validation.id);
			account.cookie = '';
			account.loggedIn = false;
			account.save();

			for (let i = 0; i < sessions.length; i++) {
				if (String(sessions[i].id) == String(account._id)) {
					endSession(sessions[i], i);
					break;
				}
			}

			res.json({ status: 'Logged out successfully' });
		} else {
			res.json({ error: 'Account is not logged in' });
		}
	} catch (error) {
	}
});

accounts.post('/addlesson', async (req, res) => {
	if (
		req.body.date == null ||
		req.body.plan == null ||
		req.body.studentid == null ||
		req.body.specPoints == null ||
		req.body.tutorid == null ||
		req.body.title == null
	) {
		res.json({ error: 'One or more parameters missing from the request' });
	} else if (req.body.studentid == req.body.tutorid) {
		res.json({ error: 'Student and tutor IDs cannot be the same' });
	} else {
		const student = await getAccount(req.body.studentid);
		const tutor = await getAccount(req.body.tutorid);
		if (student.error != undefined || tutor.error != undefined) {
			res.json({ error: '1 or more accounts were not found' });
		} else {
			const validation = await validateCookie(req.cookies.token);

			if (
				!(
					student.error == null &&
					tutor.error == null &&
					(validation.level > 2 ||
						(validation.level == 2 &&
							(await studentToTutor(tutor._id, student._id))))
				)
			) {
				res.json({ error: 'Authentication failed' });
			} else {
				if (await validateSpecPoint(req.body.specPoints)) {
					let lesson = new Lesson({
						title: req.body.title,
						plan: req.body.plan,
						date: req.body.date,
						specPoints: req.body.specPoints,
						studentID: student._id,
						tutorID: tutor._id,
					});

					try {
						await lesson.save();

						student.lessons.push(lesson._id);
						tutor.lessons.push(lesson._id);
						await student.save();
						await tutor.save();
						res.json({ lesson: 'Saved successfully' });
					} catch (err) {
						res.json({ error: err });
					}
				} else {
					res.json({
						error: '1 or more specification points are invalid',
					});
				}
			}
		}
	}
});

accounts.post('/addlessonreport', async (req, res) => {
	if (
		req.body.report == null ||
		req.body.specPointsAchieved == null ||
		req.body.lessonID == null
	) {
		res.json({ error: '1 or more specification points were invalid' });
	} else {
		const validation = await validateCookie(req.cookies.token);
		if (
			validation.level > 2 ||
			(validation.level == 2 &&
				(await tutorLesson(validation.id, req.body.lessonID)))
		) {
			if (await validateSpecPoint(req.body.specPointsAchieved)) {
				let lesson;
				try {
					lesson = await Lesson.findById(req.body.lessonID);
					lesson.report = req.body.report;
					lesson.specPointsAchieved = req.body.specPointsAchieved;

					await addStudentPoints(
						lesson.studentID,
						req.body.specPointsAchieved,
						lesson.date
					);
					await lesson.save();
					res.json({ success: 'Lesson updated successfully' });
				} catch (error) {
					res.json({ error: 'Lesson not found' });
				}
			} else {
				res.json({ error: 'Specification points incorrect' });
			}
		} else {
			res.json({ error: 'Token invalid' });
		}
	}
});

accounts.get('/getstudentlessons', async (req, res) => {
	try {
		if (req.query.studentid == null) {
			res.json({ error: 'Student ID is not present' });
		} else {
			const validation = await validateCookie(req.cookies.token);
			const account = await getAccount(req.query.studentid);

			if (account.error != undefined) {
				res.json({ error: 'This account was not found' });
			} else {
				if (
					!(
						validation.level > 2 ||
						(validation.level == 2 &&
							(await studentToTutor(
								validation.id,
								req.query.studentid
							))) ||
						(validation.level == 1 &&
							validation.id == req.query.studentid)
					)
				) {
					res.json({ error: 'Validation not successful' });
				} else {
					res.json(await getLessons(req.query.studentid, 1));
				}
			}
		}
	} catch (error) {
		res.json(error);
	}
});

accounts.get('/getstudentlatestlesson', async (req, res) => {
	try {
		if (req.cookies.token == null || req.query.studentid == null) {
			res.json({ error: '1 or more parameters were not present' });
		} else {
			const validation = await validateCookie(req.cookies.token);
			const account = await getAccount(req.query.studentid);

			if (account == undefined || account.error != undefined) {
				res.json({ error: 'Account was not found' });
			} else {
				if (
					!(
						(account.error == null && validation.level > 2) ||
						(validation.level == 2 &&
							(await studentToTutor(
								validation.id,
								req.query.studentid
							))) ||
						(validation.level == 1 &&
							validation.id == req.query.studentid)
					)
				) {
					res.json({ error: 'Validation not successful' });
				} else {
					const lessons = await getLessons(req.query.studentid, 1);
					if (lessons.error != null) {
						res.json({ error: 'This student could not be found' });
					} else {
						let date = 0;
						let lessonReturn;
						for (let lesson of lessons) {
							if (
								lesson.date > date &&
								lesson.report != undefined
							) {
								date = lesson.date;
								lessonReturn = lesson;
							}
						}
						if (lessonReturn == undefined) {
							res.json({error: "No lessons found"});
						} else {
							res.json(lessonReturn);
						}
					}
				}
			}
		}
	} catch (error) {
		res.json(error);
	}
});

accounts.get('/getstudentupcoming', async (req, res) => {
	try {
		if (req.cookies.token == null || req.query.studentid == null) {
			res.json({ error: '1 or more parameters were not found' });
		} else {
			const validation = await validateCookie(req.cookies.token);
			const account = await getAccount(req.query.studentid);

			if (account.error != undefined) {
				res.json({ error: 'This account was not found' });
			} else {
				if (
					!(
						(account.error == null && validation.level > 2) ||
						(validation.level == 2 &&
							(await studentToTutor(
								validation.id,
								req.query.studentid
							))) ||
						(validation.level == 1 &&
							validation.id == req.query.studentid)
					)
				) {
					res.json({ error: 'Validation not successful' });
				} else {
					const lessons = await getLessons(req.query.studentid, 1);
					if (lessons.error != null) {
						res.json({ error: 'This student could not be found' });
					} else {
						let date = 0;
						let lessonReturn;
						for (let lesson of lessons) {
							if (
								lesson.date > date &&
								lesson.report == undefined
							) {
								date = lesson.date;
								lessonReturn = lesson;
							}
						}

						if (lessonReturn == undefined) {
							res.json({ error: 'No upcoming lesson' });
						} else {
							res.json(lessonReturn);
						}
					}
				}
			}
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.post('/addspecpoins', async (req, res) => {
	try {
		if (req.body.specPoints == null || req.body.studentID == null) {
			res.json({ error: '1 or more specification points were invalid' });
		} else {
			let validation = await validateCookie(req.cookies.token);
			if (
				!(
					validation.level > 2 ||
					(validation.level == 2 &&
						(await studentToTutor(
							validation.id,
							req.query.studentID
						)))
				)
			) {
				res.json({ error: 'Authentication failed' });
			} else {
				res.json(
					await addStudentPoints(
						req.body.studentID,
						req.body.specPoints
					)
				);
			}
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.get('/getstudentpoints', async (req, res) => {
	try {
		const validation = await validateCookie(req.cookies.token);

		if (req.query.studentid == null) {
			res.json({ error: 'Student ID is not present' });
		} else if (
			!(
				validation.level > 2 ||
				(validation.level == 2 &&
					(await studentToTutor(
						validation.id,
						req.query.studentid
					))) ||
				(validation.level == 1 && validation.id == req.query.studentid)
			)
		) {
			res.json({ error: 'Authentication failed' });
		} else {
			const account = await getAccount(req.query.studentid);
			res.json(account.specPoints);
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.get('/getstudentprogress', async (req, res) => {
	try {
		const validation = await validateCookie(req.cookies.token);

		if (req.query.studentid == null) {
			res.json({ error: 'Student ID is not present' });
		} else if (
			!(
				validation.level > 2 ||
				(validation.level == 2 &&
					(await studentToTutor(
						validation.id,
						req.query.studentid
					))) ||
				(validation.level == 1 && validation.id == req.query.studentid)
			)
		) {
			res.json({ error: 'Authentication failed' });
		} else {
			const account = await getAccount(req.query.studentid);
			if (account.error != undefined) {
				res.json({ error: 'This account was not found' });
			} else {
				const specLength = await SpecificationPoint.countDocuments();
				const studentSpecPoints = account.specPoints.length;
				res.json({
					progress: Math.round(
						(studentSpecPoints * 100) / specLength
					),
				});
			}
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.get('/gettutorstudents', async (req, res) => {
	try {
		if (req.query.tutorid == 'null') {
			res.json({ error: 'Tutor ID is not present' });
		} else {
			const validation = await validateCookie(req.cookies.token);

			if (
				!(
					validation.level > 2 ||
					(validation.level == 2 &&
						validation.id == req.query.tutorid)
				)
			) {
				res.json({ error: 'Authentication error' });
			} else {
				const tutor = await getAccount(validation.id);
				const students = await Account.find(
					{ _id: { $in: tutor.students } },
					{ firstname: 1, surname: 1 }
				);
				res.json({ students: students });
			}
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.get('/getid', async (req, res) => {
	const validation = await validateCookie(req.cookies.token);
	if (validation.level > 0) {
		const account = await AccountFromCookie(req.cookies.token);
		res.json({ id: account._id });
	} else {
		res.json({ error: 'Cookie not valid' });
	}
});

accounts.get('/auth', async (req, res) => {
	const auth = await validateCookie(req.cookies.token);
	res.json(auth);
});

accounts.get('/tutorstudent', async (req, res) => {
	try {
		const validation = await validateCookie(req.cookies.token);
		const contains = await studentToTutor(
			validation.id,
			req.query.studentid
		);
		res.json({ contains: contains });
	} catch (error) {
		res.json({ contains: false });
	}
});

accounts.get('/gettutorlessons', async (req, res) => {
	try {
		if (req.query.tutorid == null) {
			res.json({ error: 'Tutor ID is not present' });
		} else {
			const validation = await validateCookie(req.cookies.token);
			if (
				!(
					validation.level >= 3 ||
					(validation.level == 2 &&
						validation.id == req.query.tutorid)
				)
			) {
				res.json({ error: 'Authentication error' });
			} else {
				res.json(await getLessons(req.query.tutorid, 2));
			}
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.get('/getname', async (req, res) => {
	try {
		if (req.query.studentid == null && req.query.tutorid == null) {
			res.json({ error: 'IDs were missing' });
		} else {
			const validation = await validateCookie(req.cookies.token);
			if (!(validation.level >= 2)) {
				res.json({ error: 'Authentication error' });
			} else {
				if (req.query.studentid != null) {
					const account = await Account.findById(req.query.studentid);
					res.json({
						name: account.firstname + ' ' + account.surname,
					});
				} else {
					const account = await Account.findById(req.query.tutorid);
					res.json({
						name: account.firstname + ' ' + account.surname,
					});
				}
			}
		}
	} catch (error) {
		res.json({ error: error });
	}
});

accounts.get('/getremaininghours', async (req, res) => {
	if (req.query.studentid == null) {
		res.json({ error: 'ID missing' });
	} else {
		const validation = await validateCookie(req.cookies.token);
		if (
			!(
				validation.level == 3 ||
				(validation.level == 2 &&
					(await studentToTutor(
						validation.id,
						req.query.studentid
					))) ||
				(validation.level == 1 &&
					String(validation.id) == String(req.query.studentid))
			)
		) {
			res.json({ error: 'Authentication error' });
		} else {
			try {
				const account = await Account.findById(req.query.studentid);
				res.json({ hours: account.remainingHours });
			} catch (error) {
				res.json({ error: 'Authentication error' });
			}
		}
	}
});

async function getAccount(id) {
	try {
		return await Account.findById(id);
	} catch (error) {
		return { error: error };
	}
}

async function addStudentPoints(studentID, specPoints, date) {
	try {
		const account = await Account.findById(studentID);
		if (account.specPoints == undefined) {
			account.specPoints = [];
		}

		const points = await getSpecPoints(specPoints);
		for (let point of points) {
			//If the student does not contain this specification points, then push it
			if (
				account.specPoints.filter(
					(currentPoint) => currentPoint._id + '' == point._id + ''
				).length == 0
			) {

				point.date = [date];
				account.specPoints.push(point);

			} else {
				//Else updating is needed, the date must be updated.

				await Account.updateOne(
					{
						_id: account._id,
						'specPoints.contentID': point.contentID,
					},
					{ $push: { 'specPoints.$.date': date } }
				);
			}
		}

		await account.save();
		return { success: 'Specification points added' };
	} catch (error) {
		return { error: error };
	}
}

async function getLessons(id, level) {
	try {
		let lessons;
		if (level == 1) {
			lessons = await Lesson.find({ studentID: id });
		} else if (level > 1) {
			lessons = await Lesson.find({ tutorID: id });
		}

		if (lessons.length == 0) {
			return lessons;
		} else {
			for (let lesson of lessons) {
				const specPoints = await getSpecPoints(lesson.specPoints);
				if (specPoints.error != undefined)
					res.json({ error: specPoints.error });
				lesson.specPoints = specPoints;

				const specPointsAchieved = await getSpecPoints(
					lesson.specPointsAchieved
				);
				if (specPointsAchieved.error != undefined)
					res.json({ error: specPointsAchieved.error });
				lesson.specPointsAchieved = specPointsAchieved;

				let tutor =  (await Account.findById(lesson.tutorID, 'firstname surname'));
				let student =  (await Account.findById(lesson.studentID, 'firstname surname'));
				
				lesson.tutor = tutor.firstname + " " + tutor.surname;
				lesson.student = student.firstname + " " + student.surname;

			}
			return lessons;
		}
	} catch (error) {
		return { error: error };
	}
}

async function getSpecPoints(pointsArray) {
	try {
		let points = [];
		for (let point of pointsArray) {
			points.push(await SpecificationPoint.findById(point));
		}
		return points;
	} catch (error) {
		return { error: error };
	}
}

async function AccountFromCookie(cookie) {
	const result = await Account.findOne({ cookie: cookie });
	return result;
}

async function validateCookie(cookie) {
	/*
	 * Returns 0 -> Token not found
	 * 1 -> Student account
	 * 2 -> Tutor account
	 * 3 -> Manager account
	 */

	if (cookie == '') {
		return { level: 0, id: '' };
	}

	const result = await Account.findOne({ cookie: cookie });
	if (result == undefined) {
		return { level: 0, id: '' };
	} else {
		if (!result.loggedIn) return 0;

		if (result.type == 'student') {
			refreshSession(cookie);
			return {
				level: 1,
				id: result._id,
				name: result.firstname + ' ' + result.surname,
			};
		} else if (result.type == 'tutor') {
			refreshSession(cookie);
			return {
				level: 2,
				id: result._id,
				name: result.firstname + ' ' + result.surname,
			};
		} else if (result.type == 'manager') {
			console.log("HLEOLODS");
			refreshSession(cookie);
			return {
				level: 3,
				id: result._id,
				name: result.firstname + ' ' + result.surname,
			};
		}
	}
}

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

async function validateSpecPoint(specPoints) {
	for (let point of specPoints) {
		try {
			let data = await SpecificationPoint.findById(point);
			if (data == null) return false;
		} catch (error) {
			return false;
		}
	}

	return true;
}

async function studentToTutor(tutorid, studentid) {
	try {
		const tutor = await Account.findById(tutorid);
		let contains = false;
		for (let student of tutor.students) {
			if (student == studentid) {
				contains = true;
				break;
			}
		}

		return contains;
	} catch (error) {
		return false;
	}
}

async function tutorLesson(tutorid, lessonid) {
	try {
		const tutor = await Account.findById(tutorid);
		let contains = false;
		for (let lesson of tutor.lessons) {
			if (lesson == lessonid) {
				contains = true;
				break;
			}
		}
		return contains;
	} catch (error) {
		return false;
	}
}

let sessions = [];
getDBsessions();

async function getDBsessions() {
	const sessionsdb = await Session.find({ endDate: null });
	for (let s of sessionsdb) {
		sessions.push({
			id: s.id,
			cookie: s.cookie,
			date: s.date,
			sessionid: s._id,
		});
	}
}

async function addSession(cookie, id, date) {
	let found = false;
	for (let session of sessions) {
		if (String(session.id) == String(id)) {
			const dbSession = await Session.findById(session.sessionid);
			dbSession.date = date;
			dbSession.save();

			session.cookie = cookie;
			session.date = date;
			found = true;

			break;
		}
	}

	if (!found) {
		const newdbSession = new Session({
			id: id,
			cookie: cookie,
			date: date,
		});
		sessions.push({
			id: id,
			cookie: cookie,
			date: date,
			sessionid: newdbSession._id,
		});
		newdbSession.save();
	}
}

async function refreshSession(cookie) {
	for (let session of sessions) {
		if (session.cookie == cookie) {
			let newDate = new Date().getTime();
			session.date = newDate;

			const dbSession = await Session.findById(session.sessionid);
			dbSession.date = newDate;
			dbSession.save();

			break;
		}
	}
}

setInterval(checkExpired, 1000);

//After an hour the cookie expires
async function checkExpired() {
	for (let i = 0; i < sessions.length; i++) {
		let session = sessions[i];
		if (session.date + 3600000 < new Date().getTime()) {
			endSession(session, i);
		}
	}
}

async function endSession(session, i) {
	const dbSession = await Session.findById(session.sessionid);
	dbSession.endDate = new Date().getTime();
	dbSession.save();
	sessions.splice(i, 1);

	const account = await Account.findById(session.id);
	account.loggedIn = 0;
	account.cookie = '';
	await account.save();
}

async function createStats(json) {
	let stats = new Stats(json);
	stats.date = new Date().getTime();
	stats.save();
}

module.exports = accounts;
