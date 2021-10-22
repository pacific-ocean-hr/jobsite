const { handleGetEvents, handleCreateEvent, handleEditEvent, handleDeleteEvent } = require('../model');

module.exports = {
  getEvents: (req, res) => {
    const { userId, date } = req.params;

    handleGetEvents(userId, date, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  createEvent: (req, res) => {
    const { userId } = req.params;

    handleCreateEvent(userId, req.body, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  editEvent: (req, res) => {
    const { userId } = req.params;

    handleEditEvent(userId, req.body, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  deleteEvent: (req, res) => {
    handleDeleteEvent(req.params, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
}