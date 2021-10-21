/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import fetchJobs from "../../hooks/fetchJobs";
import JobListing from "./JobListing";
import JobDetails from "./JobDetails";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";

const Jobs = ({ user }) => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [currentJob, setCurrentJob] = useState(0);
  const [heart, setHeart] = useState(null);
  const [saveJob, setSaveJob] = useState([]);

  const { jobs } = fetchJobs(params, page);

  const changeParams = (param) => {
    const newParams = { ...params };
    const key = Object.keys(param)[0];
    newParams[key] = param[key];
    setParams(newParams);
  };

  useEffect(async () => {
    console.log(user);
    if (user) {
      const response = await axios.get(
        `http://localhost:4008/saved/id/${user.id}`
      );
      // await setSaveJob(response.data);
      // let color = false;
      console.log("saveJob", saveJob, response.data);
      const fav = response.data
        .map((item) => item.job_id)
        .filter((id) => id === jobs[currentJob].job_id);
      console.log("pinkHeart", fav);
      // if (fav.length > 0) {
      //   color = true;
      // }
      setHeart(fav);
    }
  }, [heart,currentJob]);

  return (
    <div>
      <SearchForm params={params} changeParams={changeParams} />
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
                  heart={heart}
                  user={user}
                />
              ))}
          </Listings>
        </div>
        <Details className="bigCard">
          {jobs[currentJob] && (
            <JobDetails
              job={jobs[currentJob]}
              user={user}
              heartColor={heart?heart.includes(jobs[currentJob].job_id):false}
              // setHeartColor={setHeartColor}
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
