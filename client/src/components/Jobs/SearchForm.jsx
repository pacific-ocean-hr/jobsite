import React from 'react';

function SearchForm({ params, changeParams }) {
  return (
    <form action=''>
      <div>
        <label>Search Bar</label>
        <input type='text' placeholder='Search..' />
      </div>
    </form>
  );
}

export default SearchForm;
