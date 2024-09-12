/*console.log("inizio conteggio ad intervallo")
let timer = setInterval(function(){
    document.body.innerHTML += "iniziera un nuovo flusso di messaggi ogni secondo."
}, 5000);
clearInterval(timer);

console.log("inizio dopo 5 secondi...")
setTimeout(function() {
    document.body.innerHTML += "riparti dopo 5 secondi."
}, 1000); 

/*(function check() { 
    console.log("Exists!"); 
    return setInterval(check, 1000); 
})();

for (var i = 1; i < 99999; i++)
    window.clearInterval(i);*/

let bloccaoperazione = setInterval(() => console.log("il tempo non e passato ancora"), 1000);

 setTimeout(() => {clearInterval(bloccaoperazione); console.log('fermati');}, 5000);

 // funzionerà quest ennesima soluzione ? si speraaaa...ahahaha

  

