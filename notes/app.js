const express = require('express');
const cors = require('cors');
const Note = require('./database.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/notes/:id', (req, res) => {
  let query = Note.find({});
  query.exec((err, notes) => {err ? res.sendStatus(418) : res.status(200).send(notes)})
});

app.post('/notes', (req, res) => {
  const newNote = new Note(req.body)
  newNote.save((err) => {err ? res.sendStatus(418) : res.sendStatus(204)})
});

app.put('/notes/:id', (req, res) => {
  Note.findOne({_id: id}, (err, note) => {
    note.title = req.body.title;
    note.body = req.body.body;
    note.save((err) => {err ? res.sendStatus(418) : res.status(201).send()});
  });
});

app.delete('/notes/:id', (req, res) => {
  Note.deleteOne({_id: id})
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(418);
    })
});

module.exports = app;