const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const savedSchema = new Schema({
  user_id: String,
  item: Object,
  level: {
    type: String,
    enum: ['interviewed', 'applied', 'interested', 'very interested', 'extremely interested']
  }
});

const Saved = model("saved", savedSchema);

module.exports = Saved;