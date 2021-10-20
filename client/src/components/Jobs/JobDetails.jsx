import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const JobDetails = ({ job }) => {
  const [heartColor, setHeartColor] = useState('white');

  const onHeartClick = () => {
    const color = heartColor === 'white' ? 'pink' : 'white';
    setHeartColor(color);
  };

  return (
    <div>
      <h2>
        {job.title}
        <FaHeart
          fill={heartColor}
          stroke='black'
          strokeWidth='20px'
          style={{ cursor: 'pointer', paddingLeft: '10px' }}
          id={job.title}
          onClick={onHeartClick}
        />
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: job.description,
        }}
      ></div>
    </div>
  );
};

export default JobDetails;
