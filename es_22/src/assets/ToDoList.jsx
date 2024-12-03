import React from 'react';
import useFetch from './UseF';

const ToDoList = () => {
  // Utilizza l'hook useFetch per recuperare i dati
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista di To-Do</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? '✅ Completato' : '❌ Non completato'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;