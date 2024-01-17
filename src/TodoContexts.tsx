import React, { createContext, useEffect, useState } from 'react';
import { TodoItemType } from "./Type";

interface TodoProviderProps {
  children: React.ReactNode,
}

interface TodoContextValue {
  toggleTheme: () => void,
  darkMode: boolean,
  handleAddTodo: (text: string) => void,
  todoList: TodoItemType[],
  todoFilter: string,
  handleShowAllTodos: () => void,
  handleShowActiveTodos: () => void,
  handleShowCompleteTodos: () => void,
  handleDeleteTodo: (id: number) => void,
  handleToggleCompleteTodo: (id: number) => void,
  activeTodosLeft: number,
  completeExist: boolean,
  handleClearCompleteTodos: () => void
}

export const TodoContext = createContext<TodoContextValue>({} as TodoContextValue);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
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

  const completeExist = !!todoList?.find((todo) => todo.complete);

  return (
    <TodoContext.Provider value={{
      toggleTheme,
      darkMode,
      handleAddTodo,
      todoList: filteredTodos,
      todoFilter,
      handleShowAllTodos,
      handleShowActiveTodos,
      handleShowCompleteTodos,
      handleDeleteTodo,
      handleToggleCompleteTodo,
      activeTodosLeft,
      completeExist,
      handleClearCompleteTodos
    }}>
      {children}
    </TodoContext.Provider>
  );
}