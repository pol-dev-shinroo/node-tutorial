const mongoose = require("mongoose");

// schema helps to structure data (make nosql sql?)

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// think of models = collections in DB => use it in our controller
module.exports = mongoose.model("Task", TaskSchema);
