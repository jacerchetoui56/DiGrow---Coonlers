const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please provide an email"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
  interests:[String]
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.statics.generateAccessToken = function (id) {
  const token = jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: `${process.env.JWT_ACCESS_TOKEN_LIFETIME}s`,
  });
  return token;
};

userSchema.methods.comparePasswords = async function (requestPassword) {
  const isMatch = await bcrypt.compare(requestPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", userSchema);
