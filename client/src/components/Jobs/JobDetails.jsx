/* eslint-disable react/prop-types */
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const JobDetails = ({
  job, user, heartColor, setHeartColor,
}) => {
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
        <FaHeart
          fill={heartColor?'pink':'white'}
          stroke="black"
          strokeWidth="20px"
          style={{ cursor: 'pointer' }}
          onClick={onHeartClick}
        />
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
