const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../db/index.js');
const bcrypt = require('bcryptjs');

dotenv.config({ path: './.env' });

const app = express();
const port = 3000;

console.log(__dirname)
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));


// const verifyToken = (req, res, next) => {
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.send(403);
//   }
// }

// app.get('/api/test', verifyToken, (req, res) => {
//   console.log(req.token)
//   jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.send('Got the secret data')
//     }
//   })
// })

app.post('/api/signup', (req, res) => {
  User.find({ username: req.body.username }, (err, data) => {
    if (data.length > 0) {
      res.send('exist');
    } else {
      bcrypt.genSalt(10)
        .then((salt => bcrypt.hash(req.body.password, salt)))
        .then(hash => {
          User.create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            role: req.body.role
          }, (err, data) => {
            const user = {
              id: data._id,
              username: data.username,
              email: data.email,
              role: data.role
            }
            jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
              res.send(token);
            })
          });
        });
    }
  })
})
app.post('/api/signin', (req, res) => {
  console.log(req.body);
  User.find({ username: req.body.username }, (err, data) => {
    const password = data[0].password;
    bcrypt.compare(req.body.password, password)
      .then(bool => {
        if (bool) {
          const user = {
            id: data[0]._id,
            username: data[0].username,
            email: data[0].email,
            role: data[0].role
          }
          jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.send(token);
          })
        } else {
          res.send('incorrect')
        }
      })
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
