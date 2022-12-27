const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    featured: true,
    name: "entertainment center",
  }); // filters
  res.status(200).json({ msg: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  // version 6: if no matching property name it will return empty array vs if wrong value it will throw error
  res.status(200).json({ msg: products, total: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
