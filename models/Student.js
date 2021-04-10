const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("students", StudentSchema);
