import React from 'react';
import styled from 'styled-components';

function SearchForm({ params, changeParams }) {
  return (
    <>
      <Form action=''>
        <div>
          <Input type='text' placeholder='Enter Keyword' />
          &nbsp;&nbsp;
          <SearchButton>Search Jobs</SearchButton>
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
          <option value={0}>Miles Away</option>
          <option value={1}> less than 10 </option>
          <option value={2}> 10 - 20 </option>
          <option value={2}> 21 - 50 </option>
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
`;

const Input = styled.input`
  height: 25px;
  width: 300px;
`;

const SearchButton = styled.button`
  padding: 7px;
  font-family: Sans-serif;
  background-color: #49475B;
  color: white;
  border-radius: 5px;
  border: 1px solid gray;
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
