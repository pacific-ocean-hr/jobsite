const express = require('express');
const User = require('../db/index.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config({ path: './.env' });

const signup = async (req, res) => {
  const response = await User.find({ email: req.body.email });
  if (response.length > 0) {
    res.send('exist');
  } else {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      password: hash,
      email: req.body.email,
      role: req.body.role,
    });
    const user = {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      role: newUser.role,
    };
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
      res.send(token);
    });
  }
};

module.exports = signup;
