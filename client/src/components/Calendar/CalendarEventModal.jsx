import React, { useState } from 'react';
import styles, { css } from 'styled-components';

const CalendarEventModal = ({
  show, date, setShow, eventAction, id, title, start, end, body, isEditing
}) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventStart, setEventStart] = useState(start);
  const [eventEnd, setEventEnd] = useState(end);
  const [eventBody, setEventBody] = useState('');

  const clearData = () => {
    setEventTitle('');
    setEventStart('');
    setEventEnd('');
    setEventBody('');
  };

  const handleSubmitAction = (dataObj) => {
    eventAction(dataObj, date);
    setShow(false);
    clearData();
  };

  const handleSubmit = () => {
    let data = {};
    if (isEditing) {
      data = {
        date,
        title: eventTitle || title,
        start_time: eventStart || start,
        end_time: eventEnd || end,
        body: eventBody || body,
        id,
      };
      handleSubmitAction(data);
      return;
    }

    data = {
      date,
      title: eventTitle,
      start_time: eventStart,
      end_time: eventEnd,
      body: eventBody,
    };

    const value = Object.values(data);

    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === '') {
        alert('All fields must be filled before submitting');
        return;
      }
    }
    handleSubmitAction(data);
  };

  return (
    <>
      <EventModalContainer show={show}>
        <EventModal>
          <Gap>
            <Header>
              <span>Add An Event</span>
              <span>{date}</span>
            </Header>
          </Gap>
          <Body>
            <Gap>
              <Label>Event Name</Label>
              <input
                type="text"
                minLength="2"
                maxLength="60"
                value={eventTitle}
                placeholder={!title ? 'Event Name' : title}
                onChange={(e) => {
                  setEventTitle(e.target.value);
                }}
              />
            </Gap>
            <Gap>
              <Label htmlFor="event">Event Start time:</Label>
              <input
                type="time"
                id="event"
                name="appt"
                min="09:00"
                max="18:00"
                value={eventStart}
                required
                onChange={(e) => setEventStart(e.target.value)}
              />
              <small>From 9am to 6pm</small>
            </Gap>
            <Gap>
              <Label htmlFor="event">Event End time:</Label>
              <input
                type="time"
                id="event"
                name="appt"
                min="09:00"
                max="18:00"
                value={eventEnd}
                required
                onChange={(e) => setEventEnd(e.target.value)}
              />
              <small>From 9am to 6pm</small>
            </Gap>
            <Gap>
              <Label>Event Description</Label>
              <BodyText
                type="text"
                rows="3"
                columns="50"
                minLength="0"
                maxLength="120"
                value={eventBody}
                placeholder={!body ? 'Brief Event Description' : body}
                onChange={(e) => setEventBody(e.target.value)}
              />
            </Gap>
          </Body>
          <AddEvent type="button" onClick={handleSubmit}>Submit</AddEvent>
        </EventModal>
      </EventModalContainer>
    </>
  );
};

export default CalendarEventModal;

const EventModalContainer = styles.div`
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 1000;
  display: grid;
  grid-template-areas:
  "event-body"
  "event-button"
  ;
${({ show }) => show && css`
  opacity: 1;
  pointer-events: visible;
  transform: translateY(0);
  `
};
`;

const EventModal = styles.div`
  width: 275px;
  height: 350px;
  background-color: rgb(255, 255, 255);
  transform: translateY(-200px);
  transition: all 0.4s ease-in-out;
  overflow-y: auto;
  transform: translateY(0);
  background-size: cover;
  background-position: center;
  border: 3px solid #FBD63F;
  border-radius: 5%;
`;

const Header = styles.div`
  justify-content: center;
  display: grid;
  grid-rows: 1fr 1fr
  padding-top: 10px;
`;

const Body = styles.div`
  justify-content: center;
  display: grid;
  grid-rows: 1fr 1fr 1fr 3fr
  gap: 100px;
`;

const Label = styles.label`
  display: flex;
  flex-direction: column;
`;

const BodyText = styles.textarea`
  resize: none;
`;

const Gap = styles.div`
  margin-bottom: 10px;
`;

const AddEvent = styles.button`
  padding: 8px;
  background-color: #49475b;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: Sans-serif;
  margin-left: 100px;
  cursor: pointer;
`;
