const express = require('express');
const cors = require('cors');
const Note = require('./database.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/notes/:id', (req, res) => {
  let query = Note.find({user_id: req.params.id});
  query.exec((err, notes) => {err ? res.sendStatus(418) : res.status(200).send(notes)})
});

app.post('/notes', (req, res) => {
  const newNote = new Note(req.body)
  newNote.save((err) => {err ? res.sendStatus(418) : res.sendStatus(204)})
});

app.put('/notes/:id', (req, res) => {
  Note.findOne({_id: req.params.id}, (err, note) => {
    note.title = req.body.title;
    note.body = req.body.body;
    note.save((err) => {err ? res.sendStatus(418) : res.sendStatus(201)});
  });
});

app.delete('/notes/:id', (req, res) => {
  Note.deleteOne({_id: req.params.id})
  .exec((err, notes) => {err ? res.sendStatus(418) : res.sendStatus(204)})
});

module.exports = app;