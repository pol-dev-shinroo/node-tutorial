const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
