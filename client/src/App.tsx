import React, { useState } from "react";
import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { TodoListInterface } from "./model/todo";

function App() {
  const [todos, setTodos] = useState<TodoListInterface[]>([]);

  const newTodo = (text: string) => {
    // set state with previous data
    setTodos((prevTodos) => [...prevTodos, { id: Math.random(), text }]);
  };

  const deleteHandler = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo action={newTodo} />
      <TodoList item={todos} action={deleteHandler} />
    </div>
  );
}

export default App;
