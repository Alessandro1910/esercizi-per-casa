function salvaCookie(nome, valore, giorni) {
    let data = new Date();
    data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 1000));
    let scadenza = "expires=" + data.toUTCString();
    
    document.cookie = `${nome}=${valore};${scadenza};path=/`;
    
    console.log(`Cookie salvato: ${nome}=${valore}`);
  }
  
  function recuperaCookie(nome) {
    let nomeCookie = nome + "=";
    let cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      
      if (cookie.indexOf(nomeCookie) === 0) {
        console.log(`Cookie recuperato: ${cookie.substring(nomeCookie.length, cookie.length)}`);
        return cookie.substring(nomeCookie.length, cookie.length);
      }
    }
    
    console.log(`Cookie ${nome} non trovato.`);
    return "";
  }
  
  function rimuoviCookie(nome) {
    document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log(`Cookie rimosso: ${nome}`);
  }
  
  salvaCookie('utente', 'MarioRossi', 7);
  recuperaCookie('utente');              
  rimuoviCookie('utente');                
  recuperaCookie('utente');              
  