const express = require("express");
const app = express();

const dataJson = require("./data");

app.get("/", (req, res) => {
  res.json(dataJson);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
