import React from 'react';
import { TodoProvider } from '../components/TodoContext';
import TodoApp from '../components/TodoApp';


function Todoindex() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default Todoindex;
