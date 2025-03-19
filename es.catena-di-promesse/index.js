function getRandomData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3; // 70% di probabilità di successo
        if (success) {
          resolve("Dati recuperati con successo!");
        } else {
          reject("Errore nel recupero dei dati.");
        }
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3; // 70% di probabilità di successo
        if (success) {
          resolve(`${data} | Dati processati correttamente.`);
        } else {
          reject("Errore nella elaborazione dei dati.");
        }
      }, 1000);
    });
  }
  
  // Catena di promesse con gestione degli errori
  getRandomData()
    .then(response => {
      console.log("Fase 1:", response);
      return processData(response); // Passa il risultato alla prossima promessa
    })
    .then(processedData => {
      console.log("Fase 2:", processedData);
    })
    .catch(error => {
      console.error("Errore catturato:", error);
    });