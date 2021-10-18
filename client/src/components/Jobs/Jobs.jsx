/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import fetchJobs from '../../hooks/fetchJobs';
import JobListing from './JobListing';
import JobDetails from './JobDetails';
import Pagination from './Pagination';
import SearchForm from './SearchForm';

const Jobs = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [currentJob, setCurrentJob] = useState(0);
  const { jobs } = fetchJobs(params, page);

  const changeParams = (e) => {
    const param = e.target.name;
    const { value } = e.target;
    setPage(1);
    setParams((oldParams) => ({ ...oldParams, [param]: value }));
  };

  return (
    <div>
      <SearchForm params={params} changeParams={changeParams} />
      <Pagination page={page} setPage={setPage} />
      <JobPage>
        <div>
          <h3 style={{ textAlign: 'center' }}>
            {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
          </h3>
          <Listings>
            {jobs &&
              jobs.map((listing, index) => (
                <JobListing
                  key={listing.name}
                  listing={listing}
                  index={index}
                  setCurrentJob={setCurrentJob}
                />
              ))}
          </Listings>
        </div>
        <Details>
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </Details>
      </JobPage>
    </div>
  );
};

const JobPage = styled.div`
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
`;

const Listings = styled.div`
  border-radius: 8px;
  background-color: white;
`;

const Details = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 20px;
`;

export default Jobs;
