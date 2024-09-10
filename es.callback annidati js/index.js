function completaOperazione(callback) {
    setTimeout(function() {
        console.log("Prima operazione");
        callback();
    }, 5000);
}

function secondaFunzione() {
    console.log("Callback seconda operazione");
}

completaOperazione(secondaFunzione);