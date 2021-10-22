/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import axios from 'axios';

import { FaHeart } from 'react-icons/fa';

const JobDetails = ({ job, user }) => {
  const [heartColor, setHeartColor] = useState('white');

  const onHeartClick = () => {
    if (heartColor === 'white') {
      setHeartColor('pink');
      axios
        .post('http://localhost:4008/saved', {
          user_id: user.id,
          item: job,
          level: 'interested',
        })
        .catch((err) => console.log(err));
    } else {
      setHeartColor('white');

      axios
        .delete(`http://localhost:4008/saved/${job.job_id}`)
        .catch((error) => {
          console.log('Error deleting saved item: ', error);
        });
    }
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
      />
    </div>
  );
};

export default JobDetails;
