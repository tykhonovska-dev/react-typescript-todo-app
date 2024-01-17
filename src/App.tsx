import { useContext } from "react";
import { TodoContext } from "./TodoContexts";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher";
import TopBlock from "./components/TopBlock/TopBlock";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoFilters from "./components/TodoFilters/TodoFilters";
import BottomPanel from "./components/BottomPanel/BottomPanel";
import "./App.css";


function App() {
  const {darkMode} = useContext(TodoContext);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <TopBlock/>
      <div className="wrapper">
        <div className="header">
          <h1 className="title">TODO</h1>
          <ModeSwitcher/>
        </div>
        <AddTodo/>
        <TodoList/>
        <BottomPanel/>
        <TodoFilters/>
      </div>
    </div>
  );
}

export default App;
