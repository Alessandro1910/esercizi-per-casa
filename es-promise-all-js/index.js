function newDati() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('mi chiamo Ale')
        },5000)
    })
}

function newAuto() {
    return new Promise((resolve, reject) => {
        let panini = 7
        if (panini > 5){
        setTimeout(()=> {
            resolve('3')
        }, 6000)
    }else {
        reject('non ci sono abbastanza panini')
    }
    })
} 



newDati().then(risultato => {
    console.log(risultato);
    newAuto().then(risultato => console.log(risultato))
});

Promise.all([newDati(),newAuto()]).then(risultato => console.log(risultato));

