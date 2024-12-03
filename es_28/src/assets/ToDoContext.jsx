import React, { createContext, useState, useEffect } from 'react';

// Crea il contesto
export const TodoContext = createContext();

// Provider del contesto
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Recupera i to-do dall'API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Errore durante il recupero dei dati');
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
};