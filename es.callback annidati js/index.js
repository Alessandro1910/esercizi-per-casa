function completaOperazione(callback) {
    setTimeout(function() {
        console.log("Prima operazione callback");
        callback();
    }, 5000);
}

function secondaFunzione() {
    console.log("Callback seconda operazione di funzione in una funzione");
}

completaOperazione(secondaFunzione);