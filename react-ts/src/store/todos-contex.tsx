import React, {FC, useState} from 'react';
import Todo from "../models/todos";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    })
  }

  const removeTodoHandler = (id:string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo)=> todo.id !== id);
    })
  }



  const contextValue:TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <TodosContext.Provider
      value={contextValue}
    >
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
