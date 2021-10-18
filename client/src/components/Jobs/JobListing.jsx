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
    <div className='card'
      onClick={() => setCurrentJob(index)}
      onMouseEnter={toggleTextHovered}
      onMouseLeave={toggleTextHovered}
      style={{ color: `${textHovered || currentJobIndex === index ? 'black' : 'gray'}`, border: `${currentJobIndex === index ? '3px solid #799496' : 'solid thin #ACC196'}`}}>
        <h3><img src={'../assets/Novartis.png'} style={{ maxHeight: '40px', maxWidth: '40px' }}/>&nbsp;&nbsp;{listing.company.name}: {listing.name}</h3>
        <h6>Posted {moment(listing.publication_date).fromNow()}
        <a href={listing.refs.landing_page} target='_blank'>
          <button className='mainButton'
          onMouseEnter={toggleHovered}
          onMouseLeave={toggleHovered}
          style={{ transform: `${hovered ? "scale(1.15, 1.15)" : "scale(1, 1)"}` }}
          >Apply</button>
        </a></h6>
    </div>
  );
};

export default JobListing;
