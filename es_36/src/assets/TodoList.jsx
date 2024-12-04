import React from "react";
import { Link } from "react-router-dom";

const todos = [
  { id: "1", title: "Scrivere un articolo" },
  { id: "2", title: "Completare il report" },
  { id: "3", title: "Organizzare la riunione" },
];

function TodoList() {
  return (
    <div>
      <h2>Lista To-Do</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;