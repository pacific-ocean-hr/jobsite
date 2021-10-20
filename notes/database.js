const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const notesSchema = new Schema({
  user_id: String,
  title: String,
  body: String,
  created_at: Number,
});

const Note = model("note", notesSchema);

module.exports = Note;