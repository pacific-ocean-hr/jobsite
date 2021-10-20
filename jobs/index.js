const express = require('express');
const cors = require('cors');
const compression = require('compression')
// const axios = require('axios');

const { handleJoblisting } = require('./controller');

const app = express();
const port = 4000;
app.use(express.json());
app.use(compression());
app.use(cors());

app.get('/api/joblisting', cors(), handleJoblisting);



app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
