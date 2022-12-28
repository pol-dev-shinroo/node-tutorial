// check username, password in post (login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const customAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongo schema error
  // or
  if (!username || !password) {
    throw new customAPIError("please provide email and password", 400);
  }

  const id = new Date().getDate();

  // never send password as jwt payload!!! => super bad practice
  // try to keep payload small, better experience for user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Hello, ${req.user.username}`, secret: luckNumber });
};

module.exports = { login, dashboard };
