import React, { useState } from 'react';
import styles from 'styled-components';

import JobCalendar from './CalendarView';
import CalendarData from './CalendarData';
import CalendarTask from './CalendarTask';

const CalendarView = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [isTask, setIsTask] = useState(false);
  const [currentJob, setCurrentJob] = useState(0);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const getEvents = async (day) => {
    let dateSplit = await day.split('/');
    let newDate = await dateSplit[2].concat('-', dateSplit[0], '-', dateSplit[1]);

    axios.get(`http://localhost:4010/api/calendar/${user.id}/${newDate}`)
      .then((event) => {
        let data = event.data[0].events[newDate];

        if (!!data) {
          setEvents(data);
          setIsTask(true);
        } else {
          setIsTask(false);
        }
      })
      .catch((err) => {
        setIsTask(false);
        console.log('Error in getting event', err);
      });
  };

  const handleDayClick = async (day) => {
    const currentDate = day.toLocaleDateString();
    await setDate(currentDate);

    if (user !== null) {
      getEvents(currentDate);
    }
  };

  const createEvent = (data, currentDate) => {
    axios.post(`http://localhost:4010/api/calendar/${user.id}`, data)
      .then(() => {
        getEvents(currentDate);
      })
      .catch((err) => {
        console.log('Error in creating event', err);
      });
  };

  const deleteEvent = (currentDate, eventId) => {
    axios.delete(`http://localhost:4010/api/calendar/${user.id}/${eventId}`)
      .then(() => {
        getEvents(currentDate);
      })
      .catch((err) => {
        console.log('Error in deleting event', err);
      });
  };

  const editEvent = (editData, currentDate) => {
    axios.put(`http://localhost:4010/api/calendar/${user.id}`, editData)
      .then(() => {
        getEvents(currentDate);
      })
      .catch((err) => {
        console.log('Error in updating event', err);
      });
  };

  return (
    <CalendarContainer>
      <Calendar>
        <JobCalendar handleDayClick={handleDayClick} />
      </Calendar>
      {isTask ? (
        <Event>
          {events.map((event, index) => (
            <CalendarTask
              currentJobIndex={currentJob}
              key={index}
              event={event}
              index={index}
              setCurrentJob={setCurrentJob}
              deleteEvent={deleteEvent}
              editEvent={editEvent}
              date={date}
            />
          ))}
          <ShowModal type="button" onClick={() => setShow(true)}>Add An Event</ShowModal>
        </Event>
      ) : (
        <NoEventContainer>
          <NoEvents>No Events Today!</NoEvents>
          <ShowModal type="button" onClick={() => setShow(true)}>Add An Event</ShowModal>
          <CalendarEventModal
            show={show}
            date={date}
            setShow={setShow}
            eventAction={createEvent}
            isEditing={false}
            id=""
            title=""
            start=""
            end=""
            body=""
          />
        </NoEventContainer>
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
