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

app.get("/api/v1/products", (req, res) => {
  // {search: "a", limit: "3"}
  const { search, limit } = req.query;

  let searchProdList = [];

  if (search) {
    searchProdList = products.filter((item) => {
      if (item.name.startsWith(search)) {
        return item;
      }
    });
  }

  if (limit) {
    searchProdList = searchProdList.slice(0, Number(limit));
  }

  if (!search && !limit) {
    return res.status(200).json({ result: true, data: products });
  }

  if (searchProdList.length === 0) {
    return res.json({ result: true, data: [] });
  }

  res.status(200).json({ result: true, data: searchProdList });
});

app.all("*", (req, res) => {
  console.log(req);
  res.status(400).json({ res: false, msg: "wrong request" });
});

app.listen(packageJson.port, () => {
  console.log("listening on port " + packageJson.port);
});
