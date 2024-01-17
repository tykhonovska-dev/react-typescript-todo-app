import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContexts";
import "./AddTodo.css";

interface AddTodoProps {
}

const AddTodo: React.FC<AddTodoProps> = () => {
  const {handleAddTodo} = useContext(TodoContext);

  const [text, setText] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTodo(text);
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