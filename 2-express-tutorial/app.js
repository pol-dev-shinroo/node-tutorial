const express = require("express");
const app = express();
const { products, people } = require("./data");

console.log(products);

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ res: true, data: people });
});

app.listen(5000, () => {
  console.log("listening on port", 5000);
});
