import React, { useState, useCallback } from 'react';
import useFetch from './useFetch';
import useFilteredTodos from './useFilteredTodos';

const TodoList = () => {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Usa l'hook useFilteredTodos per filtrare i to-do
  const filteredTodos = useFilteredTodos(todos || [], searchTerm);

  // Memorizza la funzione di gestione del cambiamento dell'input
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista di To-Do</h1>
      
      {/* Campo di input per la ricerca */}
      <input
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: '8px',
          marginBottom: '16px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      <ul>
        {/* Visualizza i to-do filtrati */}
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? '✅ Completato' : '❌ Non completato'}
          </li>
        ))}
      </ul>

      {/* Mostra un messaggio se non ci sono risultati */}
      {filteredTodos.length === 0 && <p>Nessun to-do corrisponde al termine di ricerca.</p>}
    </div>
  );
};

export default TodoList;