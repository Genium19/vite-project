import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import { TaskContextProvider } from './context/TaskContext'

const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
    
  
);
