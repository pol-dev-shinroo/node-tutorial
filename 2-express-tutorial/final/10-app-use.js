const express = require("express");
const app = express();
const packageJson = require("../react-app/package.json");
const { loggerFirst, loggerSecond } = require("./logger");

app.use("/", loggerFirst);
app.use("/api", loggerSecond);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/people", (req, res) => {
  res.send("People");
});

app.listen(packageJson.port, () => {
  console.log("listening on " + packageJson.port);
});
