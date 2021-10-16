import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div>
      <h1>{job.name}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: job.contents,
        }}
      ></div>
    </div>
  );
};

export default JobDetails;
