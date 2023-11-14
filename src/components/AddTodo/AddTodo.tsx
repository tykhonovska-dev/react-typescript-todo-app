import React, { useState } from "react";
import "./AddTodo.css";

interface AddTodoProps {
  addTodoHandler: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodoHandler }) => {
  const [text, setText] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodoHandler(text);
    setText('');
  }

  return (
    <form className="addTodo" onSubmit={handleFormSubmit}>
      <span className="dumpCheckbox"/>
      <input type="text"
             placeholder="Create a new todo..."
             value={text}
             onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;