function salvaNelSessionStorage(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel sessionStorage: ${chiave} = ${valore}`);
  }
  
  function recuperaDalSessionStorage(chiave) {
    let valore = sessionStorage.getItem(chiave);
    
    if (valore) {
      console.log(`Valore recuperato dal sessionStorage: ${chiave} = ${valore}`);
    } else {
      console.log(`Valore non trovato nel sessionStorage per la chiave: ${chiave}`);
    }
    
    return valore;
  }
  
  function rimuoviDalSessionStorage(chiave) {
    sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso dal sessionStorage: ${chiave}`);
  }
  
  salvaNelSessionStorage('utente', 'Luca Bianchi'); 
  recuperaDalSessionStorage('utente');             
  rimuoviDalSessionStorage('utente');               
  recuperaDalSessionStorage('utente');              
  