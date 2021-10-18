const path = require('path');
const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;
app.use(express.json());
app.use(cors());

app.get('/photos', (req, res) => {
  const options = {
    url: 'https://jsonplaceholder.typicode.com/photos/?_limit=1',
    type: 'GET',
    // data: {
    //   Limit: 20,
    //   page: 0,
    // },
  };
  axios(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/posts', (req, res) => {
  const options = {
    url: 'https://jsonplaceholder.typicode.com/posts/?_limit=10',
    type: 'GET',
    // data: {
    //   Limit: 20,
    //   page: 0,
    // },
  };
  axios(options)
    .then((response) => {
      res.status(200).send(response.data.slice(0, 5000));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
