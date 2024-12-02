import React from 'react';
import Card from './assets/card';




const App = () => {
  return (
    <>
    <div>
    <h1>Componente Card</h1>
    <Card>
      <h2>Titolo della Card</h2>
      <p>Questo è il contenuto della card.</p>
    </Card>
    <Card>
      <h2>Un'altra Card</h2>
      <p>Contenuto diverso per questa card.</p>
    </Card>
  </div>
  </>
  );
};

export default App;
