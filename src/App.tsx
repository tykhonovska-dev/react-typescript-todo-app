import React, { useState, useEffect } from "react";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoFilters from "./components/TodoFilters/TodoFilters";
import { TodoItemType } from "./Type";
import lightModeBg from "./assets/lightMode.jpg";
import darkModeBg from "./assets/darkMode.jpg";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [todoFilter, setTodoFilter] = useState("ALL");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#181824" : "#e2e3e5";
  }, [darkMode]);

  const activeTodosLeft = todoList.filter((todo) => !todo.complete).length;

  const filteredTodos = filterTodos();

  const completeExist = todoList.find((todo) => todo.complete);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="topBlock" style={{ backgroundImage: darkMode ? `url(${darkModeBg})` : `url(${lightModeBg})` }}/>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">TODO</h1>
          <ModeSwitcher toggleTheme={toggleTheme} darkMode={darkMode}/>
        </div>
        <AddTodo addTodoHandler={handleAddTodo}/>
        <TodoList todoList={filteredTodos}
                  deleteTodoHandler={handleDeleteTodo}
                  toggleCompleteTodoHandler={handleToggleCompleteTodo}
        />
        <div className="bottomPanel">
          <span>{activeTodosLeft} items left</span>
          <button className={completeExist ? '' : 'disabled'} onClick={handleClearCompleteTodos}>Clear Complete</button>
        </div>
        <TodoFilters todoFilter={todoFilter}
                     showAllTodosHandler={handleShowAllTodos}
                     showActiveTodosHandler={handleShowActiveTodos}
                     showCompleteTodosHandler={handleShowCompleteTodos}
        />
      </div>
    </div>
  );
}

export default App;
