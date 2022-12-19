const mongoose = require("mongoose");

// schema helps to structure data (make nosql sql?)

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    index: true,
    required: [true, "sdfsdfsd"], // customizing error msg
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

// think of models = collections in DB => use it in our controller
module.exports = mongoose.set("strictQuery", true).model("Task", TaskSchema);
