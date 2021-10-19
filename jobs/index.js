const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/jobs/github', cors(), async (req, res) => {
  console.log(req);
  const data = await axios
    .get('https://www.themuse.com/api/public/jobs', {
      params: req.body.data,
    })
    .catch((err) => console.log('Error'));
  console.log(data);
  res.send(data);
});

const port = 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
