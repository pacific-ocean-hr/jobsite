import React from 'react';
import styled from 'styled-components';

const Pagination = ({ page, setPage }) => {
  return (
    <div>
      {page !== 1 && <PageButton onClick={() => setPage(page - 1)}>&#60; Go Back&nbsp;</PageButton>}&nbsp;
      {/* {page !== 1 && (
        <PageButton onClick={() => setPage(page - 1)}>{page - 1}</PageButton>
      )} */}
      {/* <PageButton style={{ backgroundColor: '#799496' }}>{page}</PageButton>
      <PageButton onClick={() => setPage(page + 1)}>{page + 1}</PageButton> */}
      <PageButton onClick={() => setPage(page + 1)}>&nbsp;View More &#62;</PageButton>
    </div>
  );
};

const PageButton = styled.button`
  padding: 3px;
  background-color: #E9EB9E;
  color: black;
  border-radius: 5px;
  border: 1px solid gray;
`;

export default Pagination;
