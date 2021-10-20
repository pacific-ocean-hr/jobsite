const mongoose = require('mongoose');
const app = require('./app');
const port = 4007;

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/jobsite_notes');
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }

  app.listen(port, () => console.log(`listening on ${port}`));
};

start();