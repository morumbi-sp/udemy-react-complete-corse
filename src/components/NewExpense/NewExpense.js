import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [openFormFlag, setOpenFormFlag] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const openFormHandler = (event) => {
    setOpenFormFlag((prev) => !prev);
  };

  return (
    <Card className='new-expense'>
      {openFormFlag ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onOpenForm={openFormHandler}
        />
      ) : (
        <button onClick={openFormHandler}>Open Form</button>
      )}
    </Card>
  );
};
export default NewExpense;
