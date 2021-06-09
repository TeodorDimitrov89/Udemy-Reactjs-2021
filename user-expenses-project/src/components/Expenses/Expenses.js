import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  //  click={() => props.onChangeTitle(expense, newTitle)}
  return <Card className='expenses'>{expenseItems}</Card>;
};

export default Expenses;
