const loggerFirst = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

// We cannot directly pass data to the next middleware, but we can send data through the request object.
const loggerSecond = (req, res, next) => {
  console.log(req.query);
  const { pwd } = req.query;
  if (pwd === "1234") {
    req.authorized = { status: true };
    next();
    return;
  }

  res.status(401).send("unauthorized access");
};

module.exports = { loggerFirst, loggerSecond };
