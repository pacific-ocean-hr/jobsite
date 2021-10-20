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
      <Calendar>
        <JobCalendar handleDayClick={handleDayClick} />
      </Calendar>
      {isTask ? (
        <Tasks>
          {tasks.map((task, index) => (
            <CalendarTask
              currentJobIndex={currentJob}
              key={task.task.concat(index)}
              task={task}
              index={index}
              setCurrentJob={setCurrentJob}
            />
          ))}
        </Tasks>
      ) : (
        <NoEvents>No Events Today!</NoEvents>
      )}
    </CalendarContainer>
  );
};

export default CalendarView;

const CalendarContainer = styles.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  padding: 40px;
  padding-top: 20px;
  border-radius: 6px;
  background-color: #f2f2f2;
  margin-top: 40px;
`;

const Calendar = styles.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 30%;
`;

const Tasks = styles.div`
  background-color: #f2f2f2;
  margin-right: 40%;
`;

const NoEvents = styles.h2`
  margin-top: auto;
  margin-bottom: auto;
`;
