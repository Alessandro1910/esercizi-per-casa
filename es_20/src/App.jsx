import React from 'react';
import Card from './assets/Card'


const App = () => {
  

  return (
    <>
      <h1>Applicazione con Card</h1>
      <Card>
        <h2>Benvenuto</h2>
        <p>Questa è una card che accetta contenuto come figli.</p>
      </Card>
      <Card>
        <h2>React</h2>
        <p>Puoi costruire componenti</p>
      </Card>
      <Card>
        <h2>Personalizza il tuo stile</h2>
        <p>Usa il card.css</p>
      </Card>
    </>
  )
}

export default App
