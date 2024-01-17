import React, { useContext } from 'react';
import { TodoContext } from "../../TodoContexts";
import darkModeBg from "../../assets/darkMode.jpg";
import lightModeBg from "../../assets/lightMode.jpg";
import "./TopBlock.css";

interface TopBlockProps {
}


const TopBlock:React.FC<TopBlockProps> = () => {
  const {darkMode} = useContext(TodoContext);

  return (
    <div className="topBlock" style={{ backgroundImage: darkMode ? `url(${darkModeBg})` : `url(${lightModeBg})` }}/>
  );
}

export default TopBlock;