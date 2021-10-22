/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import fetchJobs from "../../hooks/fetchJobs";
import JobListing from "./JobListing";
import JobDetails from "./JobDetails";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";

// eslint-disable-next-line react/prop-types
const Jobs = ({ user }) => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [currentJob, setCurrentJob] = useState(0);
  const [heartColor, setHeartColor] = useState('white');
  const [saveJob, setSaveJob] = useState([]);

  const { jobs } = fetchJobs(params, page);

  useEffect(async () => {
    if (user) {
      const response = await axios.get(
        `http://localhost:4008/saved/id/${user.id}`
      );
      await setSaveJob(response.data);
      let color = false;
      const fav = response.data
        .map((item) => item.job_id)
        .filter((id) => id === jobs[currentJob].job_id);
      if (fav.length > 0) {
        color = true;
      }
      setHeartColor(color?"pink":"white");
    }
  }, [currentJob]);
  const changeParams = (param) => {
    const newParams = { ...params };
    const key = Object.keys(param)[0];
    newParams[key] = param[key];
    setParams(newParams);
  };

  return (
    <div>
      <SearchForm
        params={params}
        changeParams={changeParams}
        hasData={hasData}
      />
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
                  user={user}
                />
              ))}
          </Listings>
        </div>
        <Details user={user} className="bigCard">
        {jobs[currentJob] && (
            <JobDetails
              job={jobs[currentJob]}
              user={user}
              heartColor={heartColor}
              setHeartColor={setHeartColor}
            />
          )}
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
