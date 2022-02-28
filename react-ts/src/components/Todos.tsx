import TodoItem from './TodoItem';

import { TodosContext } from '../store/todos-contex';
import classes from './Todos/Todos.module.css';
import { useContext } from "react";



const Todos = () => {
  const todoCtx = useContext(TodosContext);

  return <ul className={classes.todos}>
    {todoCtx.items.map((item)=> (
      <TodoItem key={item.id} 
        text={item.text} id={item.id}
        onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
      />
    ))} 
  </ul>
}

export default Todos;