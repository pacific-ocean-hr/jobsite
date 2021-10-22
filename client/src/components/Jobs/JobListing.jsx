/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Listing = styled.div`
  border: ${(props) => props.borderColor};
  color: ${({ theme }) => theme.color.purple};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  &:hover {
    color: black;
  }
  P {
    margin: 3px;
  }
  img {
    height: 50px;
  }
`;

const ButtonFooter = styled.div`
  align-items: end;
  display: flex;
`;

const JobTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const CompanyName = styled.p`
`;

const JobInfo = styled.div`
  align-items: center;
  display: flex;
`;

const DatePosted = styled.p`
  flex: 1;
  margin: 0;
`;

const JobListing = ({ listing, index, setCurrentJob, currentJobIndex }) => {
  const { company_name, title, publication_date, url, salary, job_type, category } = listing;
  const isSelected = currentJobIndex === index;

  return (
    <Listing
      className="card"
      onClick={() => setCurrentJob(index)}
      borderColor={isSelected ? '2px solid #799496' : '1px solid #ACC196'}
    >
      <JobTitle>{title}</JobTitle>
      <CompanyName>{company_name}</CompanyName>
      <JobInfo>
        <img src="../assets/Novartis.png" />
        <ul>
          {category && <li>{category}</li>}
          {job_type && <li>{job_type.replace('_', '-')}</li>}
          {salary && <li>{salary}</li>}
        </ul>
      </JobInfo>
      <ButtonFooter>
        <DatePosted>{moment(publication_date).fromNow()}</DatePosted>
        <a href={url} target="_blank" rel="noreferrer">
          <ApplyButton className="mainButton">Apply</ApplyButton>
        </a>
      </ButtonFooter>
    </Listing>
  );
};

export default JobListing;
