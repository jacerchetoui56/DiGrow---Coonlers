const User = require("../models/user.model");
const { StatusCodes } = require("http-status-codes");
const {promisify}=require('util')
const { BadRequestError, UnauthorizedError } = require("../errors");
const userModel = require("../models/user.model");
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Not all fields have been entered.");
  }
  const userExists = await User.findOne({ email });
  if (!userExists) {
    throw new UnauthorizedError("Invalid credentials.");
  }
  const isMatch = await userExists.comparePasswords(password);
  if (!isMatch) {
    throw new UnauthorizedError("Invalid credentials.");
  }
  const accessToken = userModel.generateAccessToken(userExists._id);
  const cookieOptions={
    expires:new Date( Date.now()+20*24*60*60*1000),
    //secure:true,
    httpOnly:true
}
   res.cookie('jwt',accessToken,cookieOptions);
  res.status(StatusCodes.CREATED).json({
    success: true,
    user: {
      _id: userExists._id,
      name: userExists.name,
    },
    accessToken,
  });
};
const register = async (req, res) => {
  const { email, name, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Not all fields have been entered.");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("An account with this email already exists.");
  }
  const user = await User.create({ name, email, password });
  const accessToken = userModel.generateAccessToken(user._id);

  res.status(StatusCodes.OK).json({
    success: true,
    user: {
      _id: user._id,
      name: user.name,
    },
    accessToken,
  });
};


module.exports = {
  login,
  register
};
