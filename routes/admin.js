const express = require("express");
const admin = express.Router();
const Account = require("../models/Account");
const SpecificationPoints = require("../models/SpecificationPoints");
const sha256 = require("js-sha256");
const Course = require("../models/Course");

//No one can access this router except admins.

admin.post("/register", async (req, res) => {
  if (
    req.body.firstname == null ||
    req.body.surname == null ||
    req.body.email == null ||
    req.body.password == null ||
    req.body.type == null
  ) {
    res.json({ error: "One or more parameters missing" });
  } else {
    try {
      //First, we need to check if this email exists.
      const accountExists = await Account.exists({
        email: req.body.email,
      });

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

admin.post("/addhours", async (req, res) => {
  if (req.body.hours == null || req.body.studentid == null) {
    res.json({ error: "1 or more parameters are missing" });
  } else {
    const account = await Account.findById(req.body.studentid);
    account.remainingHours += req.body.hours;
    await account.save();
    res.status(400).json({ status: "OK" });
  }
});

admin.post("/addspec", async (req, res) => {
  for (let point of req.body.points) {
    const newPoint = new SpecificationPoints({
      contentID: point.contentID,
      content: point.content,
      section: point.section,
      specificationName: point.specificationName,
      sub_content: point.sub_content,
      specID: "4",
    });
    await newPoint.save();
  }

  res.json({ status: 200 });
});

let contentID = 600;
const fs = require("fs");
admin.get("/addspecfromtext", async (req, res) => {
  fs.readFile("./specifications/gcsemaths.txt", "utf-8", (err, data) => {
    if (err) return console.log(err);

    let lines = data.split("\n");

    let spec = [];

    let section = "";
    let specificationName = "GCSE Maths (Pearson)";
    let content = "";
    let subcontent = [];
    let sectionCounter = 0;

    let currentContent = {};
    let starting = true;

    for (let line of lines) {
      if (!isNaN(line.charAt(0))) {
        section = line.substring(0, 3);
        sectionCounter = 0;
      } else if (line.charAt(0) == "-") {
        if (content != "") {
          spec.push({
            section: section + "." + sectionCounter,
            specificationName: specificationName,
            contentID: contentID,
            content: content,
            sub_content: subcontent,
          });
        }
        contentID++;
        subcontent = [];

        sectionCounter++;
        content = line.substring(2);
      } else if (line.charAt(0) == "=") {
        subcontent.push(line.substring(2));
      } else if (line == "nnnn") {
        spec.push({
          section: section + "." + sectionCounter,
          specificationName: specificationName,
          contentID: contentID,
          content: content,
          sub_content: subcontent,
        });
        contentID++;
        subcontent = [];
        content = "";
      }
    }
    fs.writeFileSync("./specifications/gcsemaths.json", JSON.stringify(spec));
  });
});

admin.get("/getstudents", async (req, res) => {
  const accounts = await Account.find();
  let response = [];
  for (let account of accounts) {
    if (account.type == "student") {
      let tutorName = "";
      for (let searchAccount of accounts) {
        if (String(searchAccount._id) == String(account.tutor)) {
          tutorName = searchAccount.firstname + " " + searchAccount.surname;
          break;
        }
      }

      let subjects = await Course.find({ specID: { $in: account.course } });

      response.push({
        _id: account._id,
        name: account.firstname + " " + account.surname,
        tutor: tutorName,
        tutorid: account.tutor,
        subjects: subjects,
        remainingHours: account.remainingHours,
        hours: account.hours,
      });
    }
  }
  res.json(response);
});

function randomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + new Date().getTime();
}

module.exports = admin;
