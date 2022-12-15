const express = require("express");
const app = express();
const packageJson = require("../react-app/package.json");
const logger = require("./logger");

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(packageJson.port, () => {
  console.log("listening on " + packageJson.port);
});
