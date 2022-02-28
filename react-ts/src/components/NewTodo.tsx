import React, { useRef, useContext } from "react"
import { TodosContext } from "../store/todos-contex";
import classes from './NewTodo/NewTodo.module.css';

const NewTodo: React.FC = () => {
  const newTodoContext =  useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if(enteredText.trim().length === 0) {
      return;
    }

    newTodoContext.addTodo(enteredText);
  }

  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo Text</label>
    <input type="text" id='text' ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}


export default NewTodo;