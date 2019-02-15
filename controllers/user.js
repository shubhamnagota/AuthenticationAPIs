const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../config/db");
const config = require("../config/config.json");
const User = require("../models/user");
const mongoose = require("mongoose");

async function signup(userData) {
  // Validation
  if (await User.findOne({ email: userData.email })) {
    throw `Email : ${userData.email} is already registered.`;
  }

  const user = new User(userData);
  user._id = mongoose.Types.ObjectId();

  // Hash the password
  if (userData.password) {
    user.password = bcrypt.hashSync(userData.password);
  }

  await user.save();
}

async function login({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw "Email address not found.";

  const result = bcrypt.compareSync(password, user.password);
  if (!result) throw "Password not valid.";

  const token = jwt.sign({ id: user._id }, config.SECRET_KEY, {
    expiresIn: 86400
  });
  return {
    token
  };
}

async function forgetPassword(userData) {
  // Validation
  const user = await User.findOne({ email: userData.email });
  if (!user) throw "Email address not found";

  // hash password if it was entered
  if (userData.password) {
    userData.password = bcrypt.hashSync(userData.password);
  }

  Object.assign(user, userData);

  await user.save();
}

module.exports = {
  login,
  signup,
  forgetPassword
};
