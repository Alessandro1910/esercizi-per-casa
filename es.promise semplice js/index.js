/*let ritornoPromessa = new Promise(function(resolve, reject){

    let ok = true

  /*  if(ok){
        resolve("avvenuto con successo");
    } else {
        reject("non avvenuto");
    }
});*/

/*function nuovaPromessa(){
    return ritornoPromessa = new Promise(function(){
        setTimeout(function() {
            console.log("promessa risolta");
        }, 6000);
}
.then(
    function(risultato){
        console.log(risultato);
    },
    function (errore) {
        console.error(errore);
    }
))};*/


/*function nuovaPromessa(resolve, reject){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if ("avvenuto con successo") {
            resolve();
          } else {
            reject();
          }
        }, 5000);
      });   
}

nuovaPromessa.then(
    function(risultato){
        console.log(risultato);
    },
    function (errore) {
        console.error(errore);
    })*/

    /*function nuovaPromessa(valore1, valore2){
        return (valore1 + valore2)
    }

    console.log(nuovaPromessa(10, 35))*/

function promettiMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta dopo 2 secondi!");
        }, 2000);
    });
}
promettiMessaggio().then(messaggio => {
    console.log(messaggio);
});
