import React, { useState } from 'react';
import useFetch from './useFetch';
import useFilteredTodos from './UseFilteredTodos';

const FilteredTodoList = () => {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTodos = useFilteredTodos(todos || [], searchTerm);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista di To-Do Filtrata</h1>
      <input
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? '✅ Completato' : '❌ Non completato'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredTodoList;