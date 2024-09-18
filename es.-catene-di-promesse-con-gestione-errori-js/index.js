let valutaRisultato = new Promise((resolve, reject) => {
    if (50 / 2 * 2 + 10 == 60) {
     resolve('e vero');
    } else {
         reject('e falso');
    }
     }
 );

 valutaRisultato
.then(
    function(risultato) {
        console.log(risultato)
    }
)
.catch( 
    function(errore){
        console.error(errore)


    }
)
.finally(() => {
        console.log('operazione completata');
});