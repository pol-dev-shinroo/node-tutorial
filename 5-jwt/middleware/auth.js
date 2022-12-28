const jwt = require("jsonwebtoken");
const customAPIError = require("../errors/custom-error");
const { BadRequest, UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("")) {
    throw new BadRequest("no headers with token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthenticatedError("not authenticated");
  }
};

module.exports = authenticationMiddleware;
