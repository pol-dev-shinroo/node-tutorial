const express = require("express");
const app = express();
const morgan = require("morgan");
const peopple = require("./routes/people");

app.use(morgan("tiny"));

app.use(express.static("./methods-public"));
// req 보낼때 form-urlencoded 형식으로 보내줘야함 => for parsing form data
app.use(express.urlencoded({ extended: false }));

// req 보낼때 json형식으로 보내려면....
app.use(express.json());

// router

app.use("/api/people", peopple);

app.post("/login", (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  const { name } = req.body;
  if (name === "") {
    return res.status(400).send("please provide username");
  }
  res.status(200).send(`welcome ${name}`);
});

app.listen(5000, () => {
  console.log("listening on port", 5000);
});
