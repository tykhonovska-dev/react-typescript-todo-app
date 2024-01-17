import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoProvider } from "./TodoContexts";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App/>
    </TodoProvider>
  </React.StrictMode>
);

