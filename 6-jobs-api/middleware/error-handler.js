const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "something went wrong try again later",
  };
  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }

  // val;dation error
  if (err.name === "ValidationError") {
    // console.log(err.errors);
    customError.statusCode = 400;
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  // console.log the mongoose error to set this up
  if (err.code && err.code === 11000) {
    customError.statusCode = 400;
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
  }

  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value._id}`;
  }

  // anything other than custom error are essentially errors emnating from mongoose
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
