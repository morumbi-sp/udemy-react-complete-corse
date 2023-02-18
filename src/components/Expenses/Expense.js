import './Expense.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const saveYearDataHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSaveYearData={saveYearDataHandler}
        filteredYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
