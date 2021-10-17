import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const JobListing = ({ listing, index, setCurrentJob }) => {
  return (
    <Listing onClick={() => setCurrentJob(index)}>
      <div style={{ padding: '20px' }}>
        <h3>{listing.name}</h3>
        <p>
          {listing.company.name} : {moment(listing.publication_date).fromNow()}
        </p>
        <a href={listing.refs.landing_page} target='_blank'>
          Link
        </a>
      </div>
    </Listing>
  );
};

const Listing = styled.div`
  box-shadow: 0 4px 2px -2px gray;
`;
export default JobListing;
