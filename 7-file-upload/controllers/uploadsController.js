const path = require("path");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;

// const uploadProductImage = async (req, res) => {
//   // additional checks
//   // 1) check if files exists
//   // 2) check format
//   // 3) check size

//   console.log(req.files);
//   // 1) check if files exists
//   if (!req.files) {
//     throw new CustomError.BadRequestError("No file uploaded");
//   }

//   const productImage = req.files.image;
//   console.log(productImage);
//   // 2) check format
//   if (!productImage.mimetype.startsWith("image")) {
//     throw new CustomError.BadRequestError("Please upload Image");
//   }

//   // 3) check size

//   const maxSize = 1024 * 1024; // 1kb = 1000, 1mb = 1024 *1024

//   if (productImage.size > maxSize) {
//     throw new CustomError.BadRequestError(
//       "Please upload image smaller than 1KB"
//     );
//   }

//   const imagePath = path.join(
//     __dirname,
//     `../public/uploads/` + `${productImage.name}`
//   );

//   await productImage.mv(imagePath);

//   return res
//     .status(StatusCodes.OK)
//     .json({ image: { src: `/uploads/${productImage.name}` } });
// };

const uploadProductImage = async (req, res) => {
  console.log(req.files.image);

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload", // cloudianry media library folder name
    }
  );
  res.status(StatusCodes.OK).json({ imgage: { src: result.secure_url } });
};

module.exports = {
  uploadProductImage,
};

// if you want to use stream to do the checkups, instead of using express-fileupload:
// const { createReadStream, createWriteStream } = require("fs");

// // Create a read stream for the uploaded image file
// const readStream = createReadStream(req.files.image.path);

// // Check the mimetype of the file
// if (!req.files.image.mimetype.startsWith("image")) {
//   throw new CustomError.BadRequestError("Please upload Image");
// }

// // Check the size of the file
// const maxSize = 1024 * 1024; // 1kb = 1000, 1mb = 1024 *1024
// if (req.files.image.size > maxSize) {
//   throw new CustomError.BadRequestError("Please upload image smaller than 1KB");
// }

// // Create a write stream for the destination file
// const writeStream = createWriteStream("output.jpg");

// // Pipe the read stream into the write stream to perform the copy operation
// readStream.pipe(writeStream);

// // Listen for the 'finish' event to know when the copy is complete
// writeStream.on("finish", () => {
//   console.log("File copy complete");
// });

// This code will create a read stream for the uploaded image file, check its mimetype and size, and then create a write stream for the destination file. It will then use the pipe method to copy the data from the read stream to the write stream, and listen for the finish event to know when the copy is complete.

// Using streams can be a more efficient way to process large files, as it allows you to read and write data in small chunks rather than loading the entire file into memory at once. However, it's worth noting that using streams can also be more complex than using other methods, as you need to handle events and errors properly.
