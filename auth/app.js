const express = require('express');
const cors = require('cors');
const upload = require('multer')({ dest: 'uploads/'});

const signup = require('./controllers/signup.js');
const signin = require('./controllers/signin.js');
const updateUser = require('./controllers/updateUser');

const app = express();
app.use(cors());

app.use(express.json());
app.post('/api/signup', signup);
app.post('/api/signin', signin);
app.patch('/api/user-profile', upload.any(), updateUser);

module.exports = app;
