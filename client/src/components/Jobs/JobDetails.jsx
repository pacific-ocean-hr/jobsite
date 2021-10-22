/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const JobDetails = ({ job, user }) => {
  const [heartColor, setHeartColor] = useState('white');

  const onHeartClick = () => {
    const color = heartColor === 'white' ? 'pink' : 'white';
    setHeartColor(color);
  };

  return (
    <div>
      <h2>
        {job.title}
        {user && (
          <FaHeart
            fill={heartColor}
            stroke="black"
            strokeWidth="20px"
            style={{ cursor: 'pointer' }}
            onClick={onHeartClick}
          />
        )}
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
