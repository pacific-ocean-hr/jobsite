/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarTask = ({ task, index, setCurrentJob, currentJobIndex }) => (
  <Task
    onClick={() => setCurrentJob(index)}
  >
    <span>
      <span style={{ fontWeight: 'bold' }}>{task.task}</span> {task.time.includes('-') ? `from ${task.time}` : `at ${task.time}`}
    </span>
    <button
      className="mainButton"
      style={{ padding: '8px 4px, 8px, 4px',
        marginTop: '2px',
        fontSize: '14px',
      }}
    >
      Join Meeting
    </button>
  </Task>
);

const Task = styled.div`
  background-color: white;
  border: 1px solid #49475B;
  font-family: Sans-serif;
  font-size: 14px;
  color: black;
  border-radius: 6px;
  margin: 10px;
  max-width: 50%;
  padding: 10px;
`;

export default CalendarTask;
