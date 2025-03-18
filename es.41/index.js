import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Assicurati di avere il file store.js configurato
import TodoList from "./TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;


gestire i to-do