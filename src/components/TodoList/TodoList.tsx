import React, { useContext } from "react";
import { TodoContext } from "../../TodoContexts";
import TodoItem from "../TodoItem/TodoItem";
import { TodoItemType } from "../../Type";
import "./TodoList.css";

interface TodoListProps {
  // todoList: TodoItemType[],
}

const TodoList: React.FC<TodoListProps> = () => {
  const {todoList} = useContext(TodoContext);

  return (
    <div className="todoList">
      {todoList.map((todo) => {
        return (
          <TodoItem key={todo.id}
                    todo={todo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;