import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Layout from "./assets/Layout";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;