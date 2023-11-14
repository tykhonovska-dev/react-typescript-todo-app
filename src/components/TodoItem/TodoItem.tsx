import React from "react";
import { BsTrash3, BsCheck } from "react-icons/bs";
import { TodoItemType } from "../../Type";
import "./TodoItem.css";

interface TodoItemProps {
  todo: TodoItemType,
  deleteTodoHandler: (id: number) => void,
  toggleCompleteTodoHandler: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodoHandler, toggleCompleteTodoHandler }) => {
  return (
    <div className="todoItem">
      <label className="todoItemCheckbox"
             style={{ backgroundColor: todo.complete ? '#9370DB' : 'transparent' }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleCompleteTodoHandler(todo.id)}
        />
        <BsCheck className="checkmark"/>
      </label>
      <span className="todoItemText">{todo.text}</span>
      <button className="todoItemDeleteBtn" onClick={() => deleteTodoHandler(todo.id)}><BsTrash3/></button>
    </div>
  );
}

export default TodoItem;