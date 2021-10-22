const { Pool } = require('pg');
const { getEvents, insertEvent, editEvent, deleteEvent } = require('../db/SQLQueries');

const pool = new Pool({
  user: 'jaylee',
  host: 'localhost',
  database: 'events',
  password: '',
  port: 5432,
});

pool.connect();

module.exports = {
  handleGetEvents: (userId, date, callback) => {
    pool.query(getEvents, [userId, date], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data.rows);
      }
    });
  },
  handleCreateEvent: (userId, reqBody, callback) => {
    const { title, start_time, end_time, body, date } = reqBody;

    pool.query(insertEvent, [userId, title, start_time, end_time, body, date], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data.rows);
      }
    });
  },
  handleEditEvent: (userId, reqBody, callback) => {
    const { title, start_time, end_time, body, date, id } = reqBody;

    pool.query(editEvent, [title, start_time, end_time, body, id ,userId], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data.rows);
      }
    });
  },
  handleDeleteEvent: (params, callback) => {
    const { userId, eventID } = params;

    pool.query(deleteEvent, [eventID, userId], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data.rows);
      }
    });
  },
};
