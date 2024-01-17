import React, {useContext} from "react";
import { TodoContext } from "../../TodoContexts";
import { BsMoon, BsSun } from "react-icons/bs";
import "./ModeSwitcher.css";

type ModeSwitcherProps = {
}


const  ModeSwitcher:React.FC<ModeSwitcherProps> = () => {
  const {toggleTheme, darkMode} = useContext(TodoContext);


  return (
    <button className="modeSwitcher" onClick={toggleTheme}>
      {darkMode ? <BsSun/> : <BsMoon/>}
    </button>
  );
}

export default ModeSwitcher;