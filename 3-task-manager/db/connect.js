const mongoose = require("mongoose");

const connectionString = `mongodb+srv://lewigolski:1234@cluster0.1vcre.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose.set("strictQuery", false).connect(connectionString);
};

module.exports = connectDB;
