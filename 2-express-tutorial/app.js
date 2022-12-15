const express = require("express");
const app = express();
const packageJson = require("../react-app/package.json");

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
  // you can also terminate here...
  // res.send("Testing");
};

const secondLogger = (req, res, next) => {
  console.log("second logger");
  next();
};

// the second function parameter is middleware (ex.logger)
// hence it is called the "middleware function"
app.get("/", logger, secondLogger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(packageJson.port, () => {
  console.log("listening on port " + packageJson.port);
});
