const request = require('request');

loginMethod();

/**
 * Method #1 - Login method /accounts/login
 * Form: email, password
 * Output: Success and token
 * Validation: Password and email match
 */
async function loginMethod() {
	console.log('Testing Login Method');

	/**
	 * Test #1 - Successful login
	 * Input: Email and Password
	 * Output: Cookie, level, id
	 */
	request.post(
		'http://localhost:3000/accounts/login',
		{
			headers: { 'content-type': 'application/json' },
			body: { email: '1@tutor.com', password: 'SafePassword123.' },
			json: true,
		},
		(error, response, body) => {
			if (error == null) {
				if (body.id == null || body.cookie == null || body.id == null) {
					console.log('Test #1 - Successful login [FAILED]');
				} else {
					console.log('Test #1 - Sucessful login [SUCESSFUL]');
				}
			}
		}
	);

	/**
	 * Test #2 - Unsucessful login (Wrong email)
	 * Input: Incorrect email but correct password
	 * Output: Error message
	 */
	request.post(
		'http://localhost:3000/accounts/login',
		{
			headers: { 'content-type': 'application/json' },
			body: { email: 'dsadsadsa', password: 'SafePassword123.' },
			json: true,
		},
		(error, response, body) => {
			if (error == null) {
				if (body.error == null) {
					console.log(
						'Test #2 - Unsucessful login (Wrong email) [FAILED]'
					);
				} else {
					console.log(
						'Test #2 - Unsucessful login (Wrong email) [SUCESSFUL]'
					);
				}
			}
		}
	);

	/**
	 * Test #3 - Unsuccessful login (Wrong password)
	 * Input: Correct email but incorrent password
	 * Output: Error message
	 */
	request.post(
		'http://localhost:3000/accounts/login',
		{
			headers: { 'content-type': 'application/json' },
			body: { email: '1@tutor.com', password: 'dsadsadsa' },
			json: true,
		},
		(error, response, body) => {
			if (error == null) {
				if (body.error == null) {
					console.log(
						'Test #3 - Unsucessful login (Wrong password) [FAILED]'
					);
				} else {
					console.log(
						'Test #3 - Unsucessful login (Wrong password) [SUCESSFUL]'
					);
				}
			}
		}
	);
}

/**
 * Method #2 - /accounts/addlesson
 * Form: Title, Plan, StudentID, TutorID, Date, SpecPoints, Cookie
 */

async function addLessonMethod() {
	/**
	 * Test #1 - Sucessfully add lesson (Tutor to their student)
	 * Input: Correct form
	 * Output: Sucess message
	 */
	request.post(
		'http://localhost:3000/accounts/login',
		{
			headers: { 'content-type': 'application/json' },
			body: { email: '1@tutor.com', password: 'dsadsadsa' },
			json: true,
		},
		(error, response, body) => {
			if (error == null) {
				if (body.error == null) {
					console.log(
						'Test #3 - Unsucessful login (Wrong password) [FAILED]'
					);
				} else {
					console.log(
						'Test #3 - Unsucessful login (Wrong password) [SUCESSFUL]'
					);
				}
			}
		}
	);
}
