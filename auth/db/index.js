const mongoose = require('mongoose');
const { Schema, model } = mongoose;
mongoose.connect('mongodb://localhost/auth', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected'), err => console.log('err'));

const userSchema = new Schema({
  id:Number,
  username:String,
  password:String,
  email:String,
  role:String
});

const User = model('user', userSchema);

module.exports =User;