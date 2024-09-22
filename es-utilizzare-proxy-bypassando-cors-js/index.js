async function ottieniDatiTramiteProxy() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    const apiUrl = 'https://api.github.com/users';
  
    try {
      const response = await fetch(proxyUrl + apiUrl);

      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
  
      const dati = await response.json();
      
      console.log(dati);
    } catch (errore) {
      console.error("Si è verificato un errore:", errore.message);
    }
  }
  
  ottieniDatiTramiteProxy();
  