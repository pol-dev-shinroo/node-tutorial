const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controller/people");

router.get("/", getPeople);

router.post("/", createPerson);

// put method = for modifying data
// put method - can get both params and body
router.put("/:id", updatePerson);

// delete method - accepts both params and body!!! => not only params
// -> but theoretically, for deleting you just need id
router.delete("/:id", deletePerson);

// router.route("/").get(getPeople).post(createPerson);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
