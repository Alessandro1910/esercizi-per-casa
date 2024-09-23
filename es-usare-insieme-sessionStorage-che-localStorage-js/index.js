function salvaValori(chiave, valore) {

    localStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel localStorage: ${chiave} = ${valore}`);
  
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel sessionStorage: ${chiave} = ${valore}`);
  }
  
  function recuperaValori(chiave) {
  
    let valoreLocalStorage = localStorage.getItem(chiave);
    if (valoreLocalStorage) {
      console.log(`Valore recuperato dal localStorage: ${chiave} = ${valoreLocalStorage}`);
    } else {
      console.log(`Valore non trovato nel localStorage per la chiave: ${chiave}`);
    }
    let valoreSessionStorage = sessionStorage.getItem(chiave);
    if (valoreSessionStorage) {
      console.log(`Valore recuperato dal sessionStorage: ${chiave} = ${valoreSessionStorage}`);
    } else {
      console.log(`Valore non trovato nel sessionStorage per la chiave: ${chiave}`);
    }
  }
  
  function rimuoviValori(chiave) {

    localStorage.removeItem(chiave);
    console.log(`Valore rimosso dal localStorage: ${chiave}`);
  
    sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso dal sessionStorage: ${chiave}`);
  }
  
  salvaValori('utente', 'Giulia Verdi'); 
  recuperaValori('utente');               
  rimuoviValori('utente');                
  recuperaValori('utente');               