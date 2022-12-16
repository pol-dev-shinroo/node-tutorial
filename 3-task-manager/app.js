const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const path = require("path");
const packageJson = require("./package.json");
const tasks = require("./routes/tasks");
require("dotenv").config();

// middleware
const morgan = require("morgan");
const notFound = require("./middleware/not-found");

app.use(morgan("tiny"));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB");
    app.listen(packageJson.port, () => {
      console.log("listening on port " + packageJson.port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
