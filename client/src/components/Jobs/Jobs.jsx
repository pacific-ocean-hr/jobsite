<<<<<<< HEAD
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
=======
import React, { useState } from 'react';
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef
import fetchJobs from '../../hooks/fetchJobs.jsx';
import JobListing from './JobListing.jsx';
import JobDetails from './JobDetails.jsx';
import Pagination from './Pagination.jsx';
import SearchForm from './SearchForm.jsx';
<<<<<<< HEAD
=======
import styled from 'styled-components';
import moment from 'moment';
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef

const Jobs = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [currentJob, setCurrentJob] = useState(0);
  const { jobs, loading, error } = fetchJobs(params, page);

  const changeParams = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((oldParams) => ({ ...oldParams, [param]: value }));
  };

  return (
    <div>
      <SearchForm params={params} changeParams={changeParams} />
<<<<<<< HEAD
      <JobPage>
        <div>
          <Pagination page={page} setPage={setPage} />
=======
      <Pagination page={page} setPage={setPage} />
      <JobPage>
        <div>
          <h3 style={{ textAlign: 'center' }}>
            {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
          </h3>
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef
          <Listings>
            {jobs &&
              jobs.map((listing, index) => {
                return (
                  <JobListing
<<<<<<< HEAD
                    currentJobIndex={currentJob}
=======
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef
                    key={index}
                    listing={listing}
                    index={index}
                    setCurrentJob={setCurrentJob}
                  />
                );
              })}
          </Listings>
        </div>
<<<<<<< HEAD
        <Details className='bigCard'>
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </Details>
        <Pagination page={page} setPage={setPage} />
=======
        <Details>
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </Details>
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef
      </JobPage>
    </div>
  );
};

const JobPage = styled.div`
<<<<<<< HEAD
=======
  background-color: #f2f2f2;
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
<<<<<<< HEAD
  padding-top: 20px;
  border-radius: 6px;
  background-color: #f2f2f2;
  margin-top: 40px;
`;
//

const Listings = styled.div`
  background-color: #f2f2f2;
`;

const Details = styled.div`
  border: 3px solid #799496;
  font-size: 12px;
=======
`;

const Listings = styled.div`
  border-radius: 8px;
  background-color: white;
`;

const Details = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 20px;
>>>>>>> 6f03ec1a1e5c3534ae2dccb2bf28af0e93de72ef
`;

export default Jobs;
