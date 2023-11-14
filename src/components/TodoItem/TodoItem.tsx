import React from "react";
import { TodoItemType } from "../../Type";
import "./TodoItem.css";

interface TodoItemProps {
  todo: TodoItemType,
  deleteTodoHandler: (id: number) => void,
  toggleCompleteTodoHandler: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodoHandler, toggleCompleteTodoHandler }) => {
  return (
    <div>
      <input type="checkbox"
             checked={todo.complete}
             onChange={() => toggleCompleteTodoHandler(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodoHandler(todo.id)}>x</button>
    </div>
  );
}

export default TodoItem;