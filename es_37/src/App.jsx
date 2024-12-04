import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./assets/Layout";
import TodoList from "./assets/TodoList";
import TodoDetails from "./assets/TodoDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="todo/:id" element={<TodoDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
