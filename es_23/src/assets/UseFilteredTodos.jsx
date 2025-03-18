import { useState, useEffect } from 'react';

const useFilteredTodos = (todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTodos(todos);
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      setFilteredTodos(
        todos.filter((todo) => todo.title.toLowerCase().includes(lowercasedTerm))
      );
    }
  }, [todos, searchTerm]); 

  return filteredTodos;
};

export default useFilteredTodos;