/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarEventModal from './CalendarEventModal';

const CalendarTask = ({ event, index, setCurrentJob, currentJobIndex, deleteEvent, editEvent, date }) => {
  const [hovered, setHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const [show, setShow] = useState(false);

  const toggleHovered = () => {
    setHovered(!hovered);
  };
  const toggleTextHovered = () => {
    setTextHovered(!textHovered);
  };

  const startTime = event.start_time.split(':')[0] > 12 ? `${event.start_time.split(':')[0] - 12}:${event.start_time.split(':')[1]}pm` : event.start_time.concat('am');
  const endTime = event.end_time.split(':')[0] > 12 ? `${event.end_time.split(':')[0] - 12}:${event.end_time.split(':')[1]}pm` : event.end_time.concat('am');
  const eventTime = startTime.concat(' - ', endTime);

  return (
    <Event
      className="card"
      onClick={() => setCurrentJob(index)}
      onMouseEnter={toggleTextHovered}
      onMouseLeave={toggleTextHovered}
      style={{
        color: `${textHovered || currentJobIndex === index ? 'black' : 'gray'}`,
        border: `${
          currentJobIndex === index ? '3px solid #799496' : 'solid thin #ACC196'
        }`,
      }}
    >
      <h3>
        <img
          src="../assets/Novartis.png"
          style={{ maxHeight: '40px', maxWidth: '40px' }}
        />
        &nbsp;&nbsp;{eventTime}: {event.title}
        <p>{event.body}</p>
      </h3>
      <ButtonContainer>
        <EditEvent
          className="mainButton"
          onClick={() => setShow(true)}
        >
          Edit Event
        </EditEvent>
        <CalendarEventModal
          show={show}
          date={date}
          setShow={setShow}
          eventAction={editEvent}
          id={event.id}
          title={event.title}
          start={event.start_time}
          end={event.end_time}
          body={event.body}
          isEditing
        />
        <DeleteEvent
          className="mainButton"
          onClick={() => deleteEvent(date, event.id)}
        >
          Delete Event
        </DeleteEvent>
      </ButtonContainer>
    </Event>
  );
};

const Event = styled.div`
  box-shadow: 0 4px 2px -2px gray;
  margin: 10px;
  font-family: Sans-serif;
  color: gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`

`;

const EditEvent = styled.button`
  padding: 8px;
  background-color: #49475b;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: Sans-serif;
  margin-left: 10px;
  cursor: pointer;
`;

const DeleteEvent = styled.button`
  padding: 8px;
  background-color: #49475b;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: Sans-serif;
  cursor: pointer;
`;

export default CalendarTask;
