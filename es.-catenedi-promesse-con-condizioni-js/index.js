function promettiMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('il numero e ?');
        }, 1000);
    });
    
};

let valutaRisultato = new Promise((resolve, reject) => {
   let ok = 12
   if (ok) {
    resolve('e pari');
   } else {
        reject('e dispari');
   }
    }
);

valutaRisultato
.then(
    function(risultato) {
        console.log(risultato)
    }
)

 