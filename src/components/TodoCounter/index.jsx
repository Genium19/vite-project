import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">Tienes {completedTodos} tareas pendientes de {totalTodos} totales</h2>
  );
}

export { TodoCounter };
