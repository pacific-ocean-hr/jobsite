import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div>
      {page !== 1 && <button onClick={() => setPage(page - 1)}>&#60;</button>}
      {page !== 1 && (
        <button onClick={() => setPage(page - 1)}>{page - 1}</button>
      )}
      <button style={{ backgroundColor: 'green' }}>{page}</button>
      <button onClick={() => setPage(page + 1)}>{page + 1}</button>
      <button onClick={() => setPage(page + 1)}>&#62;</button>
    </div>
  );
};

export default Pagination;
