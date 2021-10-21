/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarTask = ({ task, index, setCurrentJob, currentJobIndex }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHovered = () => {
    setHovered(!hovered);
  };

  return (
    <Task
      onClick={() => setCurrentJob(index)}
      style={{
        border: '2px solid #799496',
      }}
    >
      <span>
        <span style={{ fontWeight: 'bold' }}>{task.task}</span> {task.time.includes('-') ? `from ${task.time}` : `at ${task.time}`}
      </span>
      <JoinMeeting
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
        style={{
          transform: `${hovered ? 'scale(1.15, 1.15)' : 'scale(1, 1)'}`,
        }}
      >
        Join Meeting
      </JoinMeeting>
    </Task>
  );
};

const Task = styled.div`
  box-shadow: 0 4px 2px -2px gray;
  font-family: Sans-serif;
  color: black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5%;
  margin-bottom: 20px;
  max-width: 50%;
`;

const JoinMeeting = styled.button`
  padding: 2px;
  background-color: #49475b;
  color: white;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: Sans-serif;
  justify-content: flex-end;
  margin-top: 2px;
`;

export default CalendarTask;
