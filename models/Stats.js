const mongoose = require("mongoose");
const StatsSchema = mongoose.Schema({
  id: {
    type: String,
    required: false,
  },
  cookie: {
    type: String,
    required: false,
  },
  route: {
    type: String,
    required: true,
  },
  request: {
    type: String,
    required: true,
  },
  outcome: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("stats", StatsSchema);

/*
    Plan -> A short plan for the lesson
    Report -> A detail report of how the lesson went
    SpecPoints -> The spec points you aim to achieve, this is a JSON tree.
    specPointsAchieved -> The ones you actually got
*/
