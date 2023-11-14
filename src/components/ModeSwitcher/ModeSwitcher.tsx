import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import "./ModeSwitcher.css";

type ModeSwitcherProps = {
  toggleTheme: () => void,
  darkMode: boolean
}


const  ModeSwitcher:React.FC<ModeSwitcherProps> = ({toggleTheme, darkMode}) => {
  return (
    <button className="modeSwitcher" onClick={toggleTheme}>
      {darkMode ? <BsSun/> : <BsMoon/>}
    </button>
  );
}

export default ModeSwitcher;