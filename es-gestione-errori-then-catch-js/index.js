function nuovaVariabile() {
    return new Promise((resolve, reject) => {
        if (false) { 
        resolve('promessa risolta');
        
        } else {
        reject('promessa rifiutata');
        
    }
})
}

nuovaVariabile()
.then((messaggio) => {
    console.log(messaggio);
})

.catch((errore) => {
    console.error(errore);
})

.finally(() => {
    console.log('operazione completata')
})