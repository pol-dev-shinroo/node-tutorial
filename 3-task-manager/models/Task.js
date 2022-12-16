const mongoose = require("mongoose");

// schema helps to structure data (make nosql sql?)

const TaskSchema = new mongoose.Schema({
  name: { type: String, default: "", index: true },
  completed: { type: Boolean, default: true },
});

// think of models = collections in DB => use it in our controller
module.exports = mongoose.set("strictQuery", true).model("Task", TaskSchema);
