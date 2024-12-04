import React from 'react';
import Home from './assets/Home';
import About from './assets/About';
import{ Link, Route, Routes } from "react-router-dom";

const App = () => {
 // Aggiunta dei link per il collegamento diretto alla pagina senza dover cambiare nella barra in alto
  return (
    <>
      <nav>
        <Link to="/">Home</Link>     
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
