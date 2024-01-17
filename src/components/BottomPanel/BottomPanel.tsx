import React, { useContext } from 'react';
import { TodoContext } from "../../TodoContexts";
import "./BottomPanel.css";

interface BottomPanelProps {
}

const BottomPanel:React.FC<BottomPanelProps> = () => {
  const {activeTodosLeft, completeExist, handleClearCompleteTodos} = useContext(TodoContext);

  return (
    <div className="bottomPanel">
      <span>{activeTodosLeft} items left</span>
      <button className={completeExist ? '' : 'disabled'} onClick={handleClearCompleteTodos}>Clear Complete</button>
    </div>
  );
}

export default BottomPanel;