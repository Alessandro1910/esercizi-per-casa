import { useState, useEffect } from "react";

const useFilteredTodos = (todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(
      todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [todos, searchTerm]);

  return filteredTodos;
};

export default useFilteredTodos;