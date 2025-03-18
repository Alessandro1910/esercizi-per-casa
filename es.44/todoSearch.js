import React, { useState } from "react";
import useFilteredTodos from "./useFilteredTodos";

const TodoSearch = ({ todos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTodos = useFilteredTodos(todos, searchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoSearch;