import React from 'react';
import "./TodoFilters.css";

interface TodoFiltersProps {
  todoFilter: string,
  showAllTodosHandler: () => void,
  showActiveTodosHandler: () => void,
  showCompleteTodosHandler: () => void
}

const TodoFilters: React.FC<TodoFiltersProps> = ({
                                                   todoFilter,
                                                   showAllTodosHandler,
                                                   showActiveTodosHandler,
                                                   showCompleteTodosHandler
                                                 }) => {
  return (
    <div className="filters">
      <button className={todoFilter === 'ALL' ? "active" : ""}
              onClick={showAllTodosHandler}>
        All
      </button>
      <button className={todoFilter === 'ACTIVE' ? "active" : ""}
              onClick={showActiveTodosHandler}>
        Active
      </button>
      <button className={todoFilter === 'COMPLETE' ? "active" : ""}
              onClick={showCompleteTodosHandler}>
        Complete
      </button>
    </div>
  );
}

export default TodoFilters;