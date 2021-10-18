const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, '/dist')));

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
