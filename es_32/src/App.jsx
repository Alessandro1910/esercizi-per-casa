import React from "react";
import Layout from "./assets/Layout";
import{ Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Benvenuto nella tua app To-Do!</p>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Questa è un'app semplice per gestire una lista di to-do.</p>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Routes>
        {/* Rotte che condividono il layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      </>
  );
}

export default App;

//Non ricordo perche nell indirizzare a Home non mi fa usare il "Path" ma mi obbliga a usare "index element"


