const express = require('express');
const User = require('../db/index.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config({ path: './.env' });

const signin = async (req, res) => {
  const response = await User.find({ email: req.body.email });
  if (response.length > 0) {
    const password = await response[0].password;
    const bool = await bcrypt.compare(req.body.password, password);
    if (bool) {
      console.log(response[0]);
      const { _id, firstName, lastName, email, role, resume } = response[0];
      const user = {
        id: _id,
        firstName,
        lastName,
        email,
        role,
        resume,
      };
      console.log('user', user);
      jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        res.send(token);
      });
    } else {
      res.send('incorrect');
    }
  } else {
    res.send('incorrect');
  }
};

module.exports = signin;
