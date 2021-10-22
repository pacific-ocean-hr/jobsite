import React, { useState } from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

const ListingHeader = styled.div`
  align-items: center;
  display: flex;
  h2 {
    flex: 1;
  }
`;

const JobDetails = ({ job }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // const onHeartClick = () => {
  //   const color = heartColor === 'white' ? 'pink' : 'white';
  //   set(color);
  // };

  return (
    <div>
      <ListingHeader>
        <h2>{job.title}</h2>
        {isFavorite && <FaHeart color="pink" size={24} onClick={() => setIsFavorite(false)} />}
        {!isFavorite && <BsHeart color="#49475B" size={24} onClick={() => setIsFavorite(true)} />}
      </ListingHeader>
      <div
        dangerouslySetInnerHTML={{
          __html: job.description,
        }}
      />
    </div>
  );
};

export default JobDetails;
