import './Expense.css';
import ExpenseItem from './ExpenseItem';

function Expense({ expenses }) {
  return (
    <div className='expenses'>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default Expense;
