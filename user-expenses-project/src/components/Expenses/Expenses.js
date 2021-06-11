import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList/ExpensesList';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');
  const filteredExpenses = props.items.filter(
    (expenses) => expenses.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
