const mongoose = require('mongoose');
const app = require('./app');

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/auth');
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }

  app.listen(4000, () => console.log('listening on 4000'));
};

start();
