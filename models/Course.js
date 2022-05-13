const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema({
  specID: {
    type: String,
    required: true,
  },
  specificationName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("courses", CourseSchema);
