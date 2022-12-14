const express = require("express");
const app = express();
const path = require("path");
const packageJson = require("../react-app/package.json");
const { loggerFirst, loggerSecond } = require("./logger");
app.use(express.static(path.join(__dirname, "../react-app/build")));

// two ways to use middleware => use vs route

app.use("/", [loggerFirst, loggerSecond]);

console.log("hi");

app.get("/api/products/:id", (req, res) => {
  // console.log(req.authorized);
  console.log(req.method, req.params);
  const { id } = req.params;
  console.log(id);
  res.json({ hello: "hello" });
});
app.get("/api/people", (req, res) => {
  res.send("People");
});

// this is possible too...
app.get("/api/test", [loggerFirst, loggerSecond], (req, res) => {
  res.send("Test");
});

app.listen(packageJson.port, () => {
  console.log("listening on " + packageJson.port);
});
