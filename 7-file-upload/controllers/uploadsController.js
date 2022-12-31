const path = require("path");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const uploadProductImage = async (req, res) => {
  // additional checks
  // 1) check if files exists
  // 2) check format
  // 3) check size

  console.log(req.files);
  // 1) check if files exists
  if (!req.files) {
    throw new CustomError.BadRequestError("No file uploaded");
  }

  const productImage = req.files.image;
  console.log(productImage);
  // 2) check format
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload Image");
  }

  // 3) check size

  const maxSize = 1024 * 1024; // 1kb = 1000, 1mb = 1024 *1024

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please upload image smaller than 1KB"
    );
  }

  const imagePath = path.join(
    __dirname,
    `../public/uploads/` + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
