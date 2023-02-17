import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expense = ({ expenses }) => {
  const saveYearDataHandler = (yearData) => {
    console.log(yearData);
  };
  return (
    <Card className='expenses'>
      <ExpensesFilter onSaveYearData={saveYearDataHandler} />
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
