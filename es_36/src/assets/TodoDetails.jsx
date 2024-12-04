import React from "react";
import { useParams } from "react-router-dom";

const todos = [
  { id: "1", title: "Scrivere un articolo", description: "Scrivere un articolo per il blog." },
  { id: "2", title: "Completare il report", description: "Completare il report mensile per il team." },
  { id: "3", title: "Organizzare la riunione", description: "Pianificare e preparare la riunione del team." },
];

function TodoDetails() {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const todo = todos.find((t) => t.id === id); // Trova il to-do corrispondente

  if (!todo) {
    return <h2>To-Do non trovato!</h2>;
  }

  return (
    <div>
      <h2>Dettagli del To-Do</h2>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export default TodoDetails;