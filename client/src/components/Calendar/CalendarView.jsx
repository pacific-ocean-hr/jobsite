import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const JobCalendar = ({ handleDayClick }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="react-calendar">
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={(value, event) => handleDayClick(value)}
      />
    </div>
  );
};

export default JobCalendar;
