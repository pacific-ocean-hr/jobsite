const express = require("express");
const User = require("../../db/index.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt_decode = require("jwt-decode");
const router = express.Router();

dotenv.config({ path: "./.env" });

const signin = async (req, res) => {
  console.log(req.body);
  const response = await User.find({ email: req.body.email });
  if (response.length > 0) {
    const password = await response[0].password;
    const bool = await bcrypt.compare(req.body.password, password);
    if (bool) {
      const user = {
        id: response[0]._id,
        username: response[0].username,
        email: response[0].email,
        role: response[0].role,
      };
      jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        res.send(token);
      });
    } else {
      res.send("incorrect");
    }
  }else{
    res.send("incorrect");
  }
};

module.exports = signin;
