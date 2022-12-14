const BadRequest = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");
const CustomAPIError = require("./custom-error");
const NotFoundError = require("./not-found");

module.exports = {
  BadRequest,
  UnauthenticatedError,
  CustomAPIError,
  NotFoundError,
};
