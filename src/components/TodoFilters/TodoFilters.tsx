import React, { useContext } from 'react';
import { TodoContext } from "../../TodoContexts";
import "./TodoFilters.css";

interface TodoFiltersProps {
}

const TodoFilters: React.FC<TodoFiltersProps> = () => {
  const {todoFilter, handleShowAllTodos, handleShowActiveTodos, handleShowCompleteTodos} = useContext(TodoContext);

  return (
    <div className="filters">
      <button className={todoFilter === 'ALL' ? "active" : ""}
              onClick={handleShowAllTodos}>
        All
      </button>
      <button className={todoFilter === 'ACTIVE' ? "active" : ""}
              onClick={handleShowActiveTodos}>
        Active
      </button>
      <button className={todoFilter === 'COMPLETE' ? "active" : ""}
              onClick={handleShowCompleteTodos}>
        Complete
      </button>
    </div>
  );
}

export default TodoFilters;