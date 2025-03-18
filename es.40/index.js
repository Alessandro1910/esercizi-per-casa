import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Assicurati di avere il file store.js configurato
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
};

export default App;

esercizio Integra Redux