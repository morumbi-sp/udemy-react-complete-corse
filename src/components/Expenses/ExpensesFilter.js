import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onSaveYearData }) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const changeYearHandler = (event) => {
    setFilteredYear(event.target.value);
  };
  onSaveYearData(filteredYear);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filteredYear} onChange={changeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
