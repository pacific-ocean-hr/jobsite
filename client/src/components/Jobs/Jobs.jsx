import React, { useState } from 'react';
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
  const { jobs, hasData } = fetchJobs(params, page);

  const changeParams = (param) => {
    const newParams = { ...params };
    const key = Object.keys(param)[0];
    newParams[key] = param[key];
    setParams(newParams);
  };

  return (
    <div>
      <SearchForm params={params} changeParams={changeParams} hasData={hasData} />
      <JobPage>
        <div>
          <Pagination page={page} setPage={setPage} />
          <Listings>
            {jobs &&
              jobs.map((listing, index) => (
                <JobListing
                  currentJobIndex={currentJob}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  listing={listing}
                  index={index}
                  setCurrentJob={setCurrentJob}
                />
              ))}
          </Listings>
        </div>
        <Details className="bigCard">
          {jobs[currentJob] && <JobDetails job={jobs[currentJob]} />}
        </Details>
        <Pagination page={page} setPage={setPage} />
      </JobPage>
    </div>
  );
};

const JobPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 20px;
  padding: 40px;
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
`;

export default Jobs;
