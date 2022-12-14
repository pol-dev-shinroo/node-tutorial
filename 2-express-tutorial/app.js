const express = require("express");
const app = express();
const path = require("path");

const packageJson = require("../react-app/package.json");

app.use(express.static(path.join(__dirname, "../react-app/build")));

app.listen(packageJson.port, () => {
  console.log(`listening on port ${packageJson.port} `);
});
