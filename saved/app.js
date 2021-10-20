const express = require('express');
const cors = require('cors');
const Saved = require('./database.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/saved/:id', (req, res) => {
  let query = Saved.find({user_id: req.params.id});
  query.exec((err, items) => {err ? res.sendStatus(418) : res.status(200).send(items)})
});

app.post('/saved', (req, res) => {
  const newSaved = new Saved(req.body)
  newSaved.save((err) => {err ? res.sendStatus(418) : res.sendStatus(204)})
});

app.delete('/saved/:id', (req, res) => {
  Saved.deleteOne({_id: id})
  .exec((err) => {err ? res.sendStatus(418) : res.sendStatus(204)})
});

module.exports = app;