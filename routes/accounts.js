const express = require('express');
const accounts = express.Router();
const Account = require('../models/Account');
const Lesson = require('../models/Lesson');
const SpecificationPoint = require('../models/SpecificationPoints');
const sha256 = require('js-sha256');

accounts.get('/readall', async (req, res) => {
    
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (err) {
        res.json({ error: err });
        console.log(err);
    }
    
});

/*
-> Register Account
-> Recieves firstname, surname, email and a password.
-> Validation: 
-> Password must be safe (Capital letter, number and symbol).
-> Valid email address
-> Firstname and surname longer than 1 letter.
*/

accounts.post('/register', async (req, res) => {
    
    if (req.body.firstname == null || req.body.surname == null || req.body.email == null || req.body.password == null || req.body.type == null) {
        res.json({ error: "One or more parameters missing" });
    } else {
        try {
            
            //First, we need to check if this email exists.
            const accountExists = await Account.exists({ email: req.body.email });
            
            if (accountExists) res.json({ error: "This email already exists" });
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
                    knowledgeTree: {},
                    type: req.body.type
                    
                });
                
                try {
                    const savedAccount = await account.save();
                    res.json(savedAccount);
                } catch (err) {
                    res.json({ error: err });
                    console.log(err);
                }
                
            }
            
        } catch (error) {
            res.json({ error: error });
            console.log(error);
        }
    }
    
});

/*
-> Log in to existing account
-> Looks in database for the email
-> Recieves: Email, 
*/

accounts.post('/login', async (req, res) => {
    
    //Validation, make sure email and password are in the request (security and all that).
    if (req.body.email == null || req.body.password == null) {
        res.json({ error: "Email or password missing from request" });
    } else {
        try {
            
            const account = await Account.find({ email: req.body.email });
            // If the result of the search is more than 1 (as in it found an account with that email)
            if (account.length > 0) {
                
                const hashedPassword = sha256(req.body.password + account[0].passwordsalt);
                if (hashedPassword == account[0].password) {
                    res.json({ cookie: account[0].cookie });
                } else {
                    res.json({ error: "Incorrect password" });
                }
                
            } else {
                res.json({ error: "This account was not found" });
            }
            
        } catch (error) {
            res.json({ error: error });
            console.log(error);
        }
    }
    
});

/*
* Adds a lesson to the "lesson" array in an account
* Recieves: Email (To identify account), date, plan, specPoints
* Validation: Verify email is found, all fields are present, and that the specpoints provided are valid
* Validation: Verifies that tutor & student emails are actually that given type.
* Cookies: Session token is valid and from a tutor or manager.
* Sends: Confirmation or error message
*/
accounts.post('/addlesson', async (req, res) => {
    
    if (req.body.date == null || req.body.plan == null || req.body.studentid == null || req.body.specPoints == null || req.body.tutorid == null) {
        res.json({ error: "One or more parameters missing from the request" });
    } else if (req.body.studentid == req.body.tutorid) {
        res.json({ error: "Student and tutor IDs cannot be the same" });
    } else {
        
        const student = await getAccount(req.body.studentid);
        const tutor = await getAccount(req.body.tutorid);
        if (student.error != undefined || tutor.error != undefined) {
            res.json({error: "1 or more accounts were not found"});
        } else {
            if (!(student.error == null && tutor.error == null && await validateCookie(req.cookies.token) >= 2 && (tutor.type == "tutor" || tutor.type == "manager"))) {
                res.json({ error: "Authentication failed" });
            } else {
                
                if (await validateSpecPoint(req.body.specPoints)) {
                    
                    let lesson = new Lesson({ plan: req.body.plan, date: req.body.date, specPoints: req.body.specPoints, studentID: student._id, tutorID: tutor._id });
                    
                    try {
                        
                        await lesson.save();
                        
                        student.lessons.push(lesson._id);
                        tutor.lessons.push(lesson._id);
                        await student.save();
                        await tutor.save();
                        res.json({ lesson: "Saved successfully" });
                        
                    } catch (err) {
                        res.json({ error: err });
                        console.log(err);
                    }
                    
                } else {
                    res.json({ error: "1 or more specification points are invalid" });
                }
                
            }
        }
        
    }
    
});

/*
* Adds the lesson report, achieved spec points to the lesson
* Recieves: Report, achieved spec points and the lessonID
* Validation: The achieved spec points must be valid specification points
* LessonID must also be valid
* Cookies: Session token must be from tutor or above
* Sends: Confirmation
*/
accounts.post('/addlessonreport', async (req, res) => {
    
    if (req.body.report == null || req.body.specPointsAchieved == null || req.body.lessonID == null) {
        res.json({ error: "1 or more specification points were invalid" });
    } else {
        
        if (await validateCookie(req.cookies.token) >= 2) {
            if (await validateSpecPoint(req.body.specPointsAchieved)) {
                
                let lesson;
                try {

                    lesson = await Lesson.findById(req.body.lessonID);
                    lesson.report = req.body.report;
                    lesson.specPointsAchieved = req.body.specPointsAchieved;
    
                    await addStudentPoints(lesson.studentID, req.body.specPointsAchieved);
                    await lesson.save();
    
                    res.json({ success: "Lesson updated successfully" });

                } catch (error) {
                    res.json({error: "Lesson not found"});
                }

            } else {
                res.json({ error: "Specification points incorrect" });
            }
            
        } else {
            res.json({ error: "Token invalid" });
        }
        
    }
    
});

/*
* -> Gets the lessons from a particular studentID
* Recieves: ID, this is the ID of the student you want to fetch the lessons from
* Validation: Makes sure you are either a tutor or manager, or that you are fetching your own lessons as a student
* Sends: Lessons or error message
*/

accounts.get('/getstudentlessons', async (req, res) => {

    if (req.cookies.token == null) {
        res.json({ error: "Token not present" });
    } else if (req.query.studentid == null) {
        res.json({ error: "Student ID is not present" });
    } else {
        
        const validation = await validateCookie(req.cookies.token);
        const account = await getAccount(req.query.studentid);
        if (account.error != undefined) {
            res.json({error: "This account was not found"});
        } else {
            if (!(validation >= 2 || (validation == 1 && account._id == req.query.studentid))) {
                res.json({ error: "Validation not successful" });
            } else {
                res.json(await getStudentLessons(req.query.studentid));
            }
        }
    }
    
});

accounts.get('/getstudentlatestlesson', async (req, res) => {
    
    if (req.cookies.token == null) {
        res.json({ error: "Token not present" });
    } else if (req.query.studentid == null) {
        res.json({ error: "Student ID is not present" });
    } else {
        
        const validation = await validateCookie(req.cookies.token);
        const account = await getAccount(req.query.studentid);

        if (account == undefined) {
            res.json({error: "Account was not found"});
        } else if (account.error != undefined) {
            res.json({error: "This account was not found"});
        } else {
            if (!(validation >= 2 || (validation == 1 && account._id == req.params.studentid))) {
                res.json({ error: "Validation not successful" });
            } else {
                
                const lessons = await getStudentLessons(req.query.studentid);
                if (lessons.error != null) {
                    res.json({ error: "This student could not be found" });
                } else {
                    let date = 0;
                    let lessonReturn;
                    for (let lesson of lessons) {
                        if (lesson.date > date) {
                            date = lesson.date;
                            lessonReturn = lesson;
                        }
                    }
                    res.json(lessonReturn);
                }
                
            }
        }
    }
    
});

accounts.get('/getstudentupcoming', async (req, res) => {
    
    if (req.cookies.token == null) {
        res.json({ error: "Token not present" });
    } else if (req.query.studentid == null) {
        res.json({ error: "Student ID is not present" });
    } else {
        
        const validation = await validateCookie(req.cookies.token);
        const account = await getAccount(req.query.studentid);

        if (account.error != undefined) {
            res.json({error: "This account was not found"});
        } else {
            if (!(validation >= 2 || (validation == 1 && account._id == req.params.studentid))) {
                res.json({ error: "Validation not successful" });
            } else {
                
                const lessons = await getStudentLessons(req.query.studentid);
                if (lessons.error != null) {
                    res.json({ error: "This student could not be found" });
                } else {
                    let date = 0;
                    let lessonReturn;
                    for (let lesson of lessons) {
                        if (lesson.date > date && lesson.report == undefined) {
                            date = lesson.date;
                            lessonReturn = lesson;
                        }
                    }
                    
                    if (lessonReturn == undefined) {
                        res.json({ error: "No upcoming lesson" });
                    } else {
                        res.json(lessonReturn);
                    }
                }
                
            }
        }
    }
    
});

accounts.post('/addspecpoins', async (req, res) => {

    try {
        
        if (req.body.specPoints == null || req.body.studentID == null) {
            res.json({ error: "1 or more specification points were invalid" });
        } else if (!(await validateCookie(req.cookies.token) >= 2)) {
            res.json({error: "Authentication failed"});
        } else {
            res.json(await addStudentPoints(req.body.studentID, req.body.specPoints));
        }

    } catch (error) {
        res.json(error);
    }

});

accounts.get('/getstudentprogress', async (req, res) => {

    try {

        if (req.query.studentid == null) {
            res.json({ error: "Student ID is not present" });
        } else if (await validateCookie(req.cookies.token) == 1 && (await AccountFromCookie(req.cookies.token)).id != req.query.studentid) {
            res.json({error: "Authentication failed"});
        } else {

            const account = await getAccount(req.query.studentid);
            if (account.error != undefined) {
                res.json({error: "This account was not found"});
            } else {
                const specLength = await SpecificationPoint.countDocuments();
                const studentSpecPoints = account.specPoints.length;
                res.json({progress: studentSpecPoints * 100 / specLength});
            }


        }

    } catch (error) {
        res.json({error: error});
    }

});

accounts.get('/auth', async (req, res) => {
    if (req.cookies.token == undefined || req.query.studentid == undefined) {
        res.json({error: "Auth failed"});
    } else {

        const auth = await AccountFromCookie(req.cookies.token);

        if (auth.error != undefined) {
            res.json({error: "Auth failed"});
        } else if (String(auth._id) != String(req.query.studentid)) {
            res.json({error: "Auth failed"});
        } else {
            res.json({success: "Auth successful"});
        }
    }
})

async function getAccount(id) {
    try {
        return await Account.findById(id);
    } catch (error) {
        return {error: error};
    }
}

async function addStudentPoints(studentID, specPoints) {

    try {

        const account = await Account.findById(studentID);
        if (account.specPoints == undefined) {
            account.specPoints = [];
        }

        const points = await getSpecPoints(specPoints);
        for (let point of points) {
            if (account.specPoints.filter(currentPoint => currentPoint._id + "" == point._id + "").length == 0) {
                account.specPoints.push(point);
            }
        }

        await account.save();
        return {success: "Specification points added"};

    } catch (error) {
        return {error: error};
    }

}

async function getStudentLessons(studentID) {
    
    try {
        const lessons = await Lesson.find({ studentID: studentID });
        if (lessons.length == 0) {
            return lessons;
        } else {

            for (let lesson of lessons) {
                const specPoints = await getSpecPoints(lesson.specPoints);
                if (specPoints.error != undefined) res.json({error: specPoints.error});
                lesson.specPoints = specPoints;

                const specPointsAchieved = await getSpecPoints(lesson.specPointsAchieved);
                if (specPointsAchieved.error != undefined) res.json({error: specPointsAchieved.error});
                lesson.specPointsAchieved = specPointsAchieved;

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

async function getID(email) {
    const result = await Account.findOne({ email: email });
    if (result == undefined) return result;
    return result;
}

async function AccountFromCookie(cookie) {
    const result = await Account.findOne({ cookie: cookie });
    return result;
}

async function AccountFromID(id) {
    try {
        const result = await Account.findById(id);
        if (result.error == null) {
            return result;
        } else {
            return { error: "Account not found" };
        }
    } catch (error) {
        return { error: "Account not found" }
    }
}

async function validateCookie(cookie) {
    
    /*
    * Returns 0 -> Token not found
    * 1 -> Student account
    * 2 -> Tutor account
    * 3 -> Manager account
    */
    
    const result = await Account.findOne({ cookie: cookie });
    if (result == undefined) {
        return 0;
    } else {
        
        if (result.type == "student") {
            return 1;
        } else if (result.type == "tutor") {
            return 2;
        } else if (result.type == "manager") {
            return 3;
        }
        
    }
    
}

function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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

module.exports = accounts;