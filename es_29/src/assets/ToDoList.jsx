import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from 'react';
import { TodoContext } from './ToDoContext';

const TodoList = () => {
  const { todos, loading, error } = useContext(TodoContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

 
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  
  const filteredTodos = useMemo(() => {
    if (!todos) return [];
    const lowercasedTerm = searchTerm.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowercasedTerm)
    );
  }, [todos, searchTerm]); 

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista di To-Do</h1>
      
      <input
        type="text"
        ref={inputRef}
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
       
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? '✅ Completato' : '❌ Non completato'}
          </li>
        ))}
      </ul>

      
      {filteredTodos.length === 0 && <p>Nessun to-do corrisponde al termine di ricerca.</p>}
    </div>
  );
};

export default TodoList;
