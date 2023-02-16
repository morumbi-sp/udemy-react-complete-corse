import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expense = ({ expenses }) => {
  return (
    <Card className='expenses'>
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
