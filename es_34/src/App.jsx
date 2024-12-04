import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./assets/Layout";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Benvenuto nella tua app To-Do!</p>
    </div>
  );
}

const About = () => {
  const navigate = useNavigate(); // Hook per navigare col bottone

  const goToHome = () => {
    navigate("/"); // una volta in about questa funzione ci riporta in home
  };

  return (
    <div>
      <h2>About</h2>
      <p>Questa è un'app semplice per gestire una lista di to-do.</p>
      <button onClick={goToHome}>Torna alla Home</button>
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
