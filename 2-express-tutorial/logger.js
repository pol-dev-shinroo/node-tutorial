const loggerFirst = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};
const loggerSecond = (req, res, next) => {
  console.log("second logger");
  next();
};

module.exports = { loggerFirst, loggerSecond };
