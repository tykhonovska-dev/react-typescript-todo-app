import React, { useContext } from "react";
import { TodoContext } from "../../TodoContexts";
import { TodoItemType } from "../../Type";
import { BsTrash3, BsCheck } from "react-icons/bs";
import "./TodoItem.css";

interface TodoItemProps {
  todo: TodoItemType
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const {handleDeleteTodo, handleToggleCompleteTodo} = useContext(TodoContext);

  return (
    <div className="todoItem">
      <label className="todoItemCheckbox"
             style={{ backgroundColor: todo.complete ? '#9370DB' : 'transparent' }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleToggleCompleteTodo(todo.id)}
        />
        <BsCheck className="checkmark"/>
      </label>
      <span className="todoItemText"
            style={{ textDecoration: todo.complete ? 'line-through' : 'unset' }}
      >{todo.text}</span>
      <button className="todoItemDeleteBtn" onClick={() => handleDeleteTodo(todo.id)}><BsTrash3/></button>
    </div>
  );
}

export default TodoItem;