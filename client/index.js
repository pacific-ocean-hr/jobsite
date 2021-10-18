const path = require('path');
const axios = require('axios');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/dist')));

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
