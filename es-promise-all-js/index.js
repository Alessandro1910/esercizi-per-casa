function newDati() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('mi chiamo Ale')
        },5000)
    })
}

function newAuto() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('e ho 23 anni')
        }, 6000)
    })
}

newDati().then(risultato => {
    console.log(risultato);
    newAuto().then(risultato => console.log(risultato))
});

Promise.all([newDati(),newAuto()]).then(risultato => console.log(risultato));

