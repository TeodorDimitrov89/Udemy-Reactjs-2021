import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {isEditing ? (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onStartEditing={startEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
