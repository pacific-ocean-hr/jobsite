import React from 'react';
import styled from 'styled-components';

function SearchForm({ params, changeParams }) {
  return (
    <>
      <Form action=''>
        <div>
          <Input type='text' placeholder='Enter Keyword' />
          &nbsp;&nbsp;
          <button className='mainButton'>Search Jobs</button>
        </div>
      </Form>
      <Filters>
        <FilterOptions>
          <option value={0}>Salary</option>
          <option value={1}> $10 - 50k </option>
          <option value={2}> $50 - 75k </option>
          <option value={3}> $75 - 100k </option>
          <option value={4}> $100k + </option>
        </FilterOptions>
        <FilterOptions>
          <option value={0}>Type</option>
          <option value={1}> Contract </option>
          <option value={2}> Part-Time </option>
          <option value={2}> Full-Time </option>
        </FilterOptions>
        <FilterOptions>
          <option value={0}>Exp. Level</option>
          <option value={1}>Junior</option>
          <option value={2}>Mid</option>
          <option value={3}>Senior</option>
        </FilterOptions>
      </Filters>
    </>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 40px;
`;

const Input = styled.input`
  height: 25px;
  width: 300px;
`;

const FilterOptions = styled.select`
  height: 25px;
  padding: 2px;
  margin-right: 5px;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: nowrap;
  margin-top: 10px;
  margin-right: 95px;
`;

export default SearchForm;
