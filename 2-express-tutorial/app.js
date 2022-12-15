const express = require("express");
const app = express();
const path = require("path");
const packageJson = require("../react-app/package.json");
const { loggerFirst, loggerSecond } = require("./logger");
app.use(express.static(path.join(__dirname, "../react-app/build")));

app.use("/", [loggerFirst, loggerSecond]);

app.get("/api/products", (req, res) => {
  console.log(req.authorized);
  res.json({ hello: "hello" });
});
app.get("/api/people", (req, res) => {
  res.send("People");
});

app.listen(packageJson.port, () => {
  console.log("listening on " + packageJson.port);
});
