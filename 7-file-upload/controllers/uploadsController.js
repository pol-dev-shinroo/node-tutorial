const path = require("path");

const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  const productImage = req.files.image;
  console.log(productImage);

  const imagePath = path.join(
    __dirname,
    `../public/uploads/` + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  res.send("upload product");
};

module.exports = {
  uploadProductImage,
};
