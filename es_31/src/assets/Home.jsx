import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Scrivere un articolo", completed: false },
    { id: 2, text: "Completare il report", completed: false },
    { id: 3, text: "Organizzare la riunione", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");

  // Per aggiungere
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
    setNewTask("");
  };

  // Per gestire lo stato
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Eliminare una task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista To-Do</h1>
      <div>
        <input
          type="text"
          placeholder="Aggiungi un task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Aggiungi</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;  