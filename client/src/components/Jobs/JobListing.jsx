import moment from 'moment';
import React from 'react';

const JobListing = ({ listing, index, setCurrentJob }) => {
  return (
    <div
      className='card'
      style={{ padding: '20px' }}
      onClick={() => setCurrentJob(index)}
    >
      <div className='card-body'>
        <h3>{listing.name}</h3>
        <p>
          {listing.company.name} : {moment(listing.publication_date).fromNow()}
        </p>
        <a href={listing.refs.landing_page} target='_blank'>
          Link
        </a>
      </div>
    </div>
  );
};

export default JobListing;
