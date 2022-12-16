const mongoose = require("mongoose");

const connectionString = `mongodb+srv://lewigolski:1234@cluster0.1vcre.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority`;

mongoose
  .set("strictQuery", false)
  .connect(connectionString)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
