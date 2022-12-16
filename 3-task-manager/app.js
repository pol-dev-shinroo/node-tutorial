const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const packageJson = require("./package.json");
const tasks = require("./routes/tasks");

app.use(morgan("tiny"));

app.use(express.static(path.join(__dirname, "./public")));

// middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.listen(packageJson.port, () => {
  console.log("listening on port " + packageJson.port);
});
