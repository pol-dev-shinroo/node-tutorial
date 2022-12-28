const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequest } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequest(
  //     "Please provide name, email and password",
  //     StatusCodes.BAD_REQUEST
  //   );
  // }
  /** in this tutorial we will use mongoose validator => directly in the controller */

  // hashing => never store password as string => generating random bytes and combining it with password.
  // Before we pipe it through the hash function, a mathematiecal algoritm that maps data of any size to data of fixed size.
  // if the input changes, the resulting hash will be completely different => which is really good for storing password
  // two benefits:
  // 1) store password in a form that protects them, even if the password itself is compromised
  // 2) at the same time being able to verify the correct user password
  // for the hashing the password, we will use a library called "bcrypt.js"

  const salt = await bcrypt.genSalt(10); // random bytes
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = { register, login };
