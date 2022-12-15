const express = require("express");
const app = express();
const packageJson = require("../react-app/package.json");
const morgan = require("morgan");

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/api/products", (req, res) => {
  res.json({ res: true, data: [] });
});

app.listen(packageJson.port, () => {
  console.log("listening on port", packageJson.port);
});
