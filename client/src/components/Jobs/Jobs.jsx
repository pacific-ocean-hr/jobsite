/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import fetchJobs from '../../hooks/fetchJobs';

import JobListing from './JobListing';
import JobDetails from './JobDetails';
import Pagination from './Pagination';
import SearchForm from './SearchForm';

const JobPage = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  padding: 24px;
  border-radius: 6px;
  background-color: #f2f2f2;
`;

const Listings = styled.div`
  background-color: #f2f2f2;
`;

const Details = styled.div`
  border: 1px solid #799496;
  font-size: 14px;
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
`;

const SPINNER_SIZE = 150;

const Jobs = ({ user }) => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [currentJob, setCurrentJob] = useState(0);
  const { jobs, loading, hasData } = fetchJobs(params, page);

  const changeParams = (param) => {
    const newParams = { ...params };
    const key = Object.keys(param)[0];
    newParams[key] = param[key];
    setParams(newParams);
  };

  return (
    <div>
      <SearchForm params={params} changeParams={changeParams} hasData={hasData} />
      <LoadingState>
        <ClipLoader color="#ACC196" loading={loading} size={SPINNER_SIZE} />
      </LoadingState>
      {!loading && (
      <JobPage>
        <div>
          {/* <Pagination page={page} setPage={setPage} /> */}
          <Listings>
            {jobs
              && jobs.map((listing, index) => (
                <JobListing
                  currentJobIndex={currentJob}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  listing={listing}
                  index={index}
                  setCurrentJob={setCurrentJob}
                  user={user}
                />
              ))}
          </Listings>
        </div>
        <Details user={user} className="bigCard">
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </Details>
        <Pagination page={page} setPage={setPage} />
      </JobPage>
      )}
    </div>
  );
};

export default Jobs;
