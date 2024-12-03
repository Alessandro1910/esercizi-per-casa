import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from 'react';
import { TodoContext } from './ToDoContext';

const TodoList = () => {
  const { todos, loading, error } = useContext(TodoContext); // Accedi ai dati dal contesto
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  // Memorizza la funzione di gestione del cambiamento dell'input
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Imposta il focus sull'input di ricerca al montaggio del componente
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Utilizza useMemo per calcolare la lista filtrata
  const filteredTodos = useMemo(() => {
    if (!todos) return [];
    const lowercasedTerm = searchTerm.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowercasedTerm)
    );
  }, [todos, searchTerm]); // Ricalcola solo se i to-do o il termine di ricerca cambiano

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Lista di To-Do</h1>
      
      {/* Campo di input per la ricerca */}
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