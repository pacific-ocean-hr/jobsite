import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div>
      <h2>{job.name}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: job.contents,
        }}
      ></div>
    </div>
  );
};

export default JobDetails;
