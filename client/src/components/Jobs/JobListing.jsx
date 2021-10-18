import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';

const JobListing = ({ listing, index, setCurrentJob, currentJobIndex }) => {
  const [hovered, setHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const toggleHovered = () => {
    setHovered(!hovered);
  };
  const toggleTextHovered = () => {
    setTextHovered(!textHovered);
  };

  return (
    <Listing onClick={() => setCurrentJob(index)}

      onMouseEnter={toggleTextHovered}
      onMouseLeave={toggleTextHovered}
      style={{ color: `${textHovered || currentJobIndex === index ? 'black' : 'gray'}`, border: `${currentJobIndex === index ? '2px solid #ACC196' : '0.1px solid #E9EB9E'}`, padding: '20px', borderRadius: '8px' }}>
        <img src={'../../../dist/assets/Novartis.png'} />
        <h3>{listing.company.name}: {listing.name}</h3>
        <h6>Posted {moment(listing.publication_date).fromNow()}</h6>
        <a href={listing.refs.landing_page} target='_blank'>
          <ApplyButton
          onMouseEnter={toggleHovered}
          onMouseLeave={toggleHovered}
          style={{ transform: `${hovered ? "scale(1.15, 1.15)" : "scale(1, 1)"}` }}
          >Apply</ApplyButton>
        </a>

    </Listing>
  );
};

const Listing = styled.div`
  box-shadow: 0 4px 2px -2px gray;
  margin: 10px;
  font-family: Sans-serif;
  color: gray;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content:space-between;
`;

const ApplyButton = styled.button`
  padding: 8px;
  background-color: #49475B;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: Sans-serif;
  justify-content: flex-end;
`;

export default JobListing;
