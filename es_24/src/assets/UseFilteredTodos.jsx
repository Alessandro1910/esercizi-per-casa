import { useState, useEffect } from 'react';

const UseFilteredTodos = (todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTodos(todos); // Mostra tutti i to-do se non c'è un termine di ricerca
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      setFilteredTodos(
        todos.filter((todo) => todo.title.toLowerCase().includes(lowercasedTerm))
      );
    }
  }, [todos, searchTerm]); // Dipendenze: aggiorna quando cambiano todos o searchTerm

  return filteredTodos;
};

export default UseFilteredTodos;