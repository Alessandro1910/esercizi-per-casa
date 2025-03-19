function fetchData(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Dati recuperati con successo!");
        } else {
          reject("Errore nel recupero dei dati.");
        }
      }, 1000);
    });
  }
  
  fetchData(true)
    .then(response => {
      console.log("Successo:", response);
    })
    .catch(error => {
      console.error("Errore:", error);
    });

  fetchData(false)
    .then(response => {
      console.log("Successo:", response);
    })
    .catch(error => {
      console.error("Errore:", error);
    });
  