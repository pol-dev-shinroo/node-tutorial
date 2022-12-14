const express = require("express");
const app = express();
const path = require("path");

const packageJson = require("../react-app/package.json");

const { products, people } = require("./data");

app.use(express.static(path.join(__dirname, "../react-app/build")));

app.get("/api/products", (req, res) => {
  /** sending the whole json */
  // res.status(201).json(dataJson);
  /** 객체 조작 */
  const newProducts = products.map((item) => {
    const { id, name, image, price } = item;
    return { id, name, image, price };
  });
  res.json(newProducts);
});

app.listen(packageJson.port, () => {
  console.log(`listening on port ${packageJson.port} `);
});
