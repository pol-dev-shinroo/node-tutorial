const mongoose = require("mongoose");

// schema helps to structure data (make nosql sql?)

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// think of models = collections in DB
module.exports = mongoose.model("Task", TaskSchema);
