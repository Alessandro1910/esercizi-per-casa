function salvaNelLocalStorage(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel localStorage: ${chiave} = ${valore}`);
  }

  function recuperaDalLocalStorage(chiave) {
    let valore = localStorage.getItem(chiave);
    
    if (valore) {
      console.log(`Valore recuperato dal localStorage: ${chiave} = ${valore}`);
    } else {
      console.log(`Valore non trovato nel localStorage per la chiave: ${chiave}`);
    }
    
    return valore;
  }

  function rimuoviDalLocalStorage(chiave) {
    localStorage.removeItem(chiave);
    console.log(`Valore rimosso dal localStorage: ${chiave}`);
  }
  
  salvaNelLocalStorage('nome', 'Mario Rossi');  
  recuperaDalLocalStorage('nome');             
  rimuoviDalLocalStorage('nome');              
  recuperaDalLocalStorage('nome');              
  