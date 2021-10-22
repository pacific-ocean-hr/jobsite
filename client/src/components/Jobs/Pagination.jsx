/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: 'flex';
  justify-content: space-evenly;
  text-align: center;
`;

const Pagination = ({ page, setPage }) => (
  <PaginationContainer>
    {/* back button */}
    {page !== 1 && (
      <button type="button" style={{ cursor: 'pointer' }} className="mainButton" onClick={() => setPage(page - 10)}>
        &#60; Go Back&nbsp;
      </button>
    )}
    {/* view more button */}
    <button type="button" style={{ cursor: 'pointer' }}onClick={() => setPage(page + 10)} className="mainButton">
      &nbsp;View More &#62;
    </button>
  </PaginationContainer>
);

export default Pagination;
