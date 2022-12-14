const express = require("express");
const app = express();
const path = require("path");

const packageJson = require("../react-app/package.json");

const { products, people } = require("./data");

app.use(express.static(path.join(__dirname, "../react-app/build")));

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/people", (req, res) => {
  res.json(people);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  console.log("productId", productID);

  // by default params value is string
  const product = products.find((item) => {
    return item.id === Number(productID);
  });
  console.log("product", product);

  if (product === undefined) {
    res.status(404).send("no matching id");
  } else {
    res.json(product);
  }
});

app.listen(packageJson.port, () => {
  console.log(`listening on port ${packageJson.port}`);
});
