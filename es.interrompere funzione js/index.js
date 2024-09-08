console.log("inizio conteggio ad intervallo")
let timer = setInterval(function(){
    document.body.innerHTML += "iniziera un nuovo flusso di messaggi ogni secondo."
}, 1000);
clearInterval(timer);

console.log("inizio dopo 3 secondi...")
setTimeout(function() {
    document.body.innerHTML += "riparti dopo 3 secondi."
}, 3000);

  

