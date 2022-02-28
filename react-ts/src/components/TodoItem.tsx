import React from 'react';
import classes from './TodoItem/TodoItem.module.css';

type TodoItemType = {
  text: string;
  id: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<TodoItemType> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>
    {props.text}
  </li>
}


export default TodoItem;