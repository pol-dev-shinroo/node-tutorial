const express = require("express");
const router = express.Router();
let { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ res: true, data: people });
});

router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((item) => {
    return item.id === Number(id);
  });
  if (!person) {
    return res.status(400).json({ res: false });
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

// delete method - accepts both params and body!!! => not only params
// -> but theoretically, for deleting you just need id
router.delete("/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const person = people.find((item) => {
    return item.id === Number(req.params.id);
  });
  if (!person) {
    return res.status(400).json({ res: false });
  }

  const newPeople = people.filter((item) => {
    return item.id !== Number(req.params.id);
  });

  res.status(200).json({ res: true, data: newPeople });
});

module.exports = router;
