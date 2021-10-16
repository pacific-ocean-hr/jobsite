const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello Jay!')
})

app.get('/api/jobs', (req, res) => {
  // GET https://remotive.io/api/remote-jobs
  // save to db

  res.send('jobs');
});

app.get('/api/jobs/:id', (req, res) => {
  // we may or may not need this
  res.send('job');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
