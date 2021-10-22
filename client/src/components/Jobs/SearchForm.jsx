import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa';

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 20px;
`;

const Input = styled.input`
  border: ${({ theme }) => `1px solid ${theme.color.teal}`};
  border-radius: 6px;
  padding: 11px;
  width: 300px;
`;

const FilterOptions = styled.select`
  height: 25px;
  padding: 2px;
  margin-right: 5px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  position: relative;
`;

const SearchButton = styled.button`
  display: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  border-radius: 10%;
`;

const SearchBank = (key, item) => {
  const searchBank = {
    salary: {
      '$10 - 50k': 1,
      '$50 - 75k': 2,
      '$75 - 100k': 3,
      '$100k +': 4,
    },
    type: {
      Contract: 'contract',
      'Part-Time': 'part_time',
      'Full-Time': 'full_time',
      Internship: 'internship',
      Freelance: 'freelance',
    },
    exp_level: {
      Junior: 'junior',
      Mid: 'mid',
      Senior: 'senior',
    },
  };
  return searchBank[key][item];
};

function SearchForm({ params, changeParams }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState('');
  const [explevel, setExpLevel] = useState('');
  const [isfilterActive, setIsFilterActive] = useState(false);

  const onSearchInput = (e) => {
    const { value } = e.target;

    setSearchTerm(value);
  };

  const onSalaryFilter = async (e) => {
    e.preventDefault();
    const { value } = e.target;

    setIsFilterActive(true);

    const searchValue = await SearchBank('salary', value);
    changeParams({ pay_band: searchValue });

    setSalary(value);
  };

  const onJobTypeFilter = async (e) => {
    e.preventDefault();
    const { value } = e.target;

    const searchValue = await SearchBank('type', value);
    changeParams({ job_type: searchValue });

    setJobType(value);
  };

  const onExpLevelFilter = async (e) => {
    e.preventDefault();
    const { value } = e.target;

    const searchValue = await SearchBank('exp_level', value);
    changeParams({ exp_level: searchValue });

    setExpLevel(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    changeParams({ search: searchTerm });
  };

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', color: '#49475B' }}
      >
        <h4 style={{ fontStyle: 'italic' }}>
          &#34;Connecting people with jobs and jobs with people.&#34;
        </h4>
      </div>
      <Form action="">
        <div>
          <Input
            type="text"
            value={searchTerm}
            placeholder="Enter Keyword"
            onChange={onSearchInput}
          />
          &nbsp;&nbsp;
          <button
            type="button"
            className="mainButton"
            onClick={handleSearch}
          >
            Search Jobs
          </button>
        </div>
      </Form>
      <Filters>
        <FilterOptions
          onChange={onSalaryFilter}
        >
          <option value="Salary">Salary</option>
          <option value="$10 - 50k"> $10 - 50k </option>
          <option value="$50 - 75k"> $50 - 75k </option>
          <option value="$75 - 100k"> $75 - 100k </option>
          <option value="$100k +"> $100k + </option>
        </FilterOptions>
        <FilterOptions
          onChange={onJobTypeFilter}
        >
          <option value="Type">Type</option>
          <option value="Contract"> Contract </option>
          <option value="Part-Time"> Part-Time </option>
          <option value="Full-Time"> Full-Time </option>
          <option value="Internship"> Internship </option>
          <option value="Freelance"> Freelance </option>
        </FilterOptions>
        <FilterOptions
          name="explevel"
          onChange={onExpLevelFilter}
        >
          <option value="Exp. Level">Exp. Level</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </FilterOptions>
      </Filters>
      {salary && (
      <SearchButton onClick={() => setSalary('')}>
        <FaRegWindowClose style={{ paddingRight: 10 }} />
        {' '}
        {salary}
      </SearchButton>
      )}
      {jobType && (
      <SearchButton onClick={() => setJobType('')}>
        <FaRegWindowClose style={{ paddingRight: 10 }} />
        {jobType}
      </SearchButton>
      )}
      {explevel && (
      <SearchButton onClick={() => setExpLevel('')}>
        <FaRegWindowClose style={{ paddingRight: 10 }} />
        {explevel}
      </SearchButton>
      )}
    </>
  );
}

export default SearchForm;
