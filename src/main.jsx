import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import { TaskContextProvider } from './context/TaskContext'
import { TodoProvider } from '../src/components/TodoContext';

const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  
    <TaskContextProvider>
      <TodoProvider>
      <App />
      </TodoProvider>
    </TaskContextProvider>
    
  
);

