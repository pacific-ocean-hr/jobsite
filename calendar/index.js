const express = require('express');
const cors = require('cors');
const compression = require('compression');

const { getEvents, createEvent, editEvent, deleteEvent } = require('./controller');

const app = express();
const port = 4010;
app.use(express.json());
app.use(compression());
app.use(cors());

app.get('/api/calendar/:userId/:date', cors(), getEvents);

app.post('/api/calendar/:userId', cors(), createEvent);

app.put('/api/calendar/:userId', cors(), editEvent);

app.delete('/api/calendar/:userId/:eventID', cors(), deleteEvent);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));