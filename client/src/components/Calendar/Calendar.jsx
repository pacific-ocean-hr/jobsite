import React, { useState } from 'react';
import styles from 'styled-components';

import JobCalendar from './CalendarView';
import CalendarData from './CalendarData';
import CalendarTask from './CalendarTask';

const CalendarView = () => {
  const [tasks, setTask] = useState([]);
  const [isTask, setIsTask] = useState(false);
  const [currentJob, setCurrentJob] = useState(0);

  const handleDayClick = (day) => {
    const currentDate = day.toLocaleDateString();
    const data = CalendarData[currentDate];
    if (data) {
      setTask(data);
      setIsTask(true);
    } else {
      setIsTask(false);
    }
  };

  return (
    <CalendarContainer>
      <JobCalendar handleDayClick={handleDayClick} />
      {isTask ? (
        <div style={{
          maxHeight: 380,
          maxWidth: '70%',
          display: 'flex',
          flexFlow: 'column wrap',
          justifyContent: 'sapce-between',
        }}
        >
          {tasks.map((task, index) => (
            <CalendarTask
              currentJobIndex={currentJob}
              key={task.task.concat(index)}
              task={task}
              index={index}
              setCurrentJob={setCurrentJob}
            />
          ))}
        </div>
      ) : (
        <NoEvents>No Events Today!</NoEvents>
      )}
    </CalendarContainer>
  );
};

export default CalendarView;

const CalendarContainer = styles.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
  padding: 5%;
  border-radius: 6px;
  background-color: #f2f2f2;
  margin-top: 40px;
`;

const NoEvents = styles.h2`
  margin-top: 25%;
  color: #49475b;
`;
