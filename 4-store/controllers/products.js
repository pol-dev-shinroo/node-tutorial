const { query } = require("express");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-company"); // filters
  res.status(200).json({ msg: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  // const products = await Product.find(queryObj)?.sort({ [sort]: -1 });

  /************ Chaining Promise ********/
  let result = Product.find(queryObj);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const filedsList = fields.split(",").join("");
    result = result.select(filedsList);
  }
  const products = await result;
  // version 6: if no matching property name it will return empty array vs if wrong value it will throw error
  res.status(200).json({ msg: products, total: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
