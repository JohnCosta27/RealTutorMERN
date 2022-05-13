const mongoose = require("mongoose");
const AccountSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  tutor: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordsalt: {
    type: String,
    required: true,
  },
  cookie: {
    type: String,
  },
  lessons: {
    type: [JSON],
  },
  type: {
    type: String,
    required: true,
    enum: ["manager", "tutor", "student"],
  },
  specPoints: {
    type: Array,
  },
  course: {
    type: Array,
  },
  students: {
    type: Array,
  },
  hours: {
    type: Number,
  },
  remainingHours: {
    type: Number,
  },
  loggedIn: {
    type: Boolean,
  },
});

module.exports = mongoose.model("accounts", AccountSchema);

/*
Firstname -> String
Surname -> String
Email -> String, will be used to login
Password -> String, hashed sha256
PasswordSalt -> Generated (String)
Cookie -> Generated (String)
KnowledgeTree -> JSON
*/
