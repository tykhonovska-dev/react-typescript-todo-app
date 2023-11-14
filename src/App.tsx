import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { TodoItemType } from "./Type";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [todoFilter, setTodoFilter] = useState("ALL");

  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      complete: false
    }

    setTodoList([...todoList, newTodo]);
  }

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  const handleToggleCompleteTodo = (id: number) => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      }

      return todo;
    }))
  }

  const handleClearCompleteTodos = () => {
    setTodoList(todoList.filter((todo) => !todo.complete));
    setTodoFilter("ALL");
  }

  const handleShowAllTodos = () => {
    setTodoFilter("ALL");
  }

  const handleShowActiveTodos = () => {
    setTodoFilter("ACTIVE");
  }

  const handleShowCompleteTodos = () => {
    setTodoFilter("COMPLETE");
  }

  const filterTodos = (): TodoItemType[] => {
    if (todoFilter === "ALL") {
      return todoList;
    }

    if (todoFilter === "ACTIVE") {
      return todoList.filter((todo) => !todo.complete);
    }

    if (todoFilter === "COMPLETE") {
      return todoList.filter((todo) => todo.complete);
    }

    return todoList;
  }

  const activeTodosLeft = todoList.filter((todo) => !todo.complete).length;

  const filteredTodos = filterTodos();

  return (
    <div className="app">
      <AddTodo addTodoHandler={handleAddTodo}/>
      <TodoList todoList={filteredTodos}
                deleteTodoHandler={handleDeleteTodo}
                toggleCompleteTodoHandler={handleToggleCompleteTodo}
      />
      <div>
        <span>{activeTodosLeft} items left</span>
        <div>
          <button onClick={handleShowAllTodos}>All</button>
          <button onClick={handleShowActiveTodos}>Active</button>
          <button onClick={handleShowCompleteTodos}>Complete</button>
        </div>
        <button onClick={handleClearCompleteTodos}>Clear Complete</button>
      </div>

    </div>
  );
}

export default App;
