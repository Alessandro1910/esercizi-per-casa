async function ottieniDatiSenzaCORS() {
    const url = 'https://api.github.com/user'; 
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
      
      const dati = await response.json();
      console.log(dati);
    } catch (errore) {
      console.error("Si è verificato un errore:", errore.message);
    }
  }
  
  ottieniDatiSenzaCORS();
  