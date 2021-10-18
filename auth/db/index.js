const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  id: Number,
  lastName: String,
  firstName: String,
  password: String,
  email: String,
  role: String,
});

const User = model("user", userSchema);

module.exports = User;
