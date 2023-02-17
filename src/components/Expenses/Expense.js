import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const saveYearDataHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  const expensesContent = filteredExpenses.length ? (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  ) : (
    <p>No expenses found.</p>
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSaveYearData={saveYearDataHandler}
        filteredYear={filteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expense;
