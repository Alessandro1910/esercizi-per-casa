async function inviaDati() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; 
    
    const datiDaInviare = {
      title: 'Esempio di Titolo',
      body: 'Questo è un esempio di contenuto.',
      userId: 1
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(datiDaInviare) 
      });
      

      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
      
      const dati = await response.json();
      
      console.log(dati);
    } catch (errore) {
      console.error("Si è verificato un errore:", errore);
    }
  }
  
  inviaDati();
  