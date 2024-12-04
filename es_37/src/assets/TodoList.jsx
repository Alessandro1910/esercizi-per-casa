import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const todos = [
  { id: "1", title: "Scrivere un articolo" },
  { id: "2", title: "Completare il report" },
  { id: "3", title: "Organizzare la riunione" },
];

function TodoList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || ""; // Ottieni il termine di ricerca dai parametri della query
  const [searchTerm, setSearchTerm] = useState(searchQuery); // Stato per il campo di ricerca

  // Filtra i to-do in base al termine di ricerca
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Gestisci il cambiamento del campo di ricerca
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Aggiorna lo stato locale
    setSearchParams(value ? { search: value } : {}); // Aggiorna i parametri della query
  };

  return (
    <div>
      <h2>Lista To-Do</h2>

      {/* Campo di ricerca */}
      <input
        type="text"
        placeholder="Cerca un to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Lista filtrata di to-do */}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;