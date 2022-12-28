const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 6,
    // maxlength: 12,
  },
});

// mongoose middleware (in mongoose version5 you dont need to invoke next)
UserSchema.pre("save", async function (next) {
  // do the hashing here
  const salt = await bcrypt.genSalt(10); // random bytes
  this.password = await bcrypt.hash(this.password, salt);
  // next();
});

module.exports = mongoose.model("User", UserSchema);
