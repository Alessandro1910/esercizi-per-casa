async function catchError() {
    return new Promise((resolve, reject) => {
        let valore = true
        if (10 / 2 == 3) {
            resolve(true)
        } else {
           reject(false) 
        }
    })
}

async function init() {
    try {
      const risultato = await catchError();
      console.log(risultato);
    } catch (errore) {
      console.error("Errore:", errore);
    }
  }

  init();
  
  