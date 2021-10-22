/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Pagination = ({ page, setPage }) => (
  <div>
    {page !== 1 && (
      <PageButton
        style={{ cursor: 'pointer' }}
        onClick={() => setPage(page - 10)}
      >
        &#60; Go Back&nbsp;
      </PageButton>
    )}
    &nbsp;
    <PageButton
      style={{ cursor: 'pointer' }}
      onClick={() => setPage(page + 10)}
    >
      &nbsp;View More &#62;
    </PageButton>
  </div>
);

const PageButton = styled.button`
  padding: 3px;
  background-color: #e9eb9e;
  color: black;
  border-radius: 5px;
  border: 1px solid gray;
`;

export default Pagination;
