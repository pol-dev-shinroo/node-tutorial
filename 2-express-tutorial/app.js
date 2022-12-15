const express = require("express");
const app = express();
let { products, people } = require("./data");
const morgan = require("morgan");
app.use(morgan("tiny"));

app.use(express.static("./methods-public"));
// req 보낼때 form-urlencoded 형식으로 보내줘야함 => for parsing form data
app.use(express.urlencoded({ extended: false }));

// req 보낼때 json형식으로 보내려면....
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ res: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const person = people.find((item) => {
    return item.name === req.body.name;
  });
  console.log(people);
  if (person) {
    people = [...people, { id: people.length + 1, name: req.body.name }];
    console.log(people);
    return res.status(200).json({ person: person.name });
  }
  res.status(400).send({ res: false });
});

// put method = for modifying data
// put method - can get both params and body
app.put("/api/people/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((item) => {
    return item.id === Number(id);
  });
  if (!person) {
    res.status(400).json({ res: false });
  }

  const newPeople = people.map((item) => {
    if (item.id === Number(id)) {
      return { ...item, name };
    } else {
      return item;
    }
  });

  res.status(200).json(newPeople);
});

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
