const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  res.send("upload product");
};

module.exports = {
  uploadProductImage,
};
