const mongoose = require("mongoose");
const StudentFeedback = mongoose.Schema({
  answers: {
    type: Array,
    required: true,
  },
  lessonID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StudentFeedback", StudentFeedback);
