import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoItemType } from "../../Type";
import "./TodoList.css";

interface TodoListProps {
  todoList: TodoItemType[],
  deleteTodoHandler: (id: number) => void,
  toggleCompleteTodoHandler: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todoList, deleteTodoHandler, toggleCompleteTodoHandler }) => {
  return (
    <div className="todoList">
      {todoList.map((todo) => {
        return (
          <TodoItem key={todo.id}
                    todo={todo}
                    deleteTodoHandler={deleteTodoHandler}
                    toggleCompleteTodoHandler={toggleCompleteTodoHandler}
          />
        );
      })}
    </div>
  );
}

export default TodoList;