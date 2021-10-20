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
  const [textHovered, setTextHovered] = useState(false);

  const toggleHovered = () => {
    setHovered(!hovered);
  };
  const toggleTextHovered = () => {
    setTextHovered(!textHovered);
  };

  return (
    <Task
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
        &nbsp;&nbsp;{task.time}: {task.task}
      </h3>
      <JoinMeeting
        className="mainButton"
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
  margin: 10px;
  font-family: Sans-serif;
  color: gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const JoinMeeting = styled.button`
  padding: 8px;
  background-color: #49475b;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: Sans-serif;
  justify-content: flex-end;
`;

export default CalendarTask;
