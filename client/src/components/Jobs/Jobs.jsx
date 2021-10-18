/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
import fetchJobs from '../../hooks/fetchJobs.jsx';
import JobListing from './JobListing.jsx';
import JobDetails from './JobDetails.jsx';
import Pagination from './Pagination.jsx';
import SearchForm from './SearchForm.jsx';

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
      <JobPage>
        <div>
          <Pagination page={page} setPage={setPage} />
          <Listings>
            {jobs &&
              jobs.map((listing, index) => {
                return (
                  <JobListing
                    currentJobIndex={currentJob}
                    key={index}
                    listing={listing}
                    index={index}
                    setCurrentJob={setCurrentJob}
                  />
                );
              })}
          </Listings>
        </div>
        <Details>
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </Details>
        <Pagination page={page} setPage={setPage} />
      </JobPage>
    </div>
  );
};

const JobPage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
  border-radius: 6px;
`;
// background-color: #f2f2f2;

const Listings = styled.div`
  background-color: white;
`;

const Details = styled.div`
  border-radius: 8px;
  border: 2px solid #ACC196;
  background-color: white;
  box-shadow: 0px 4px 4px -1px gray;
  font-family: Sans-serif;
  padding: 20px;
  max-height: 500px;
  overflow-y: scroll;
`;
// border: 1px solid #799496;

export default Jobs;
