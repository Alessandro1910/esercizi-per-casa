function nuovaValuta () {
    return new Promise((resolve, reject) => {
        let panini = 10
        if (panini > 9) {
            setTimeout(() => {
                resolve('ci sono panini per tutti')
            }, 4000);
        } else {
                reject("non ci sono panini per tutti")
        }
    })
}

function evaMele() {
    return new Promise((resolve, reject) => {
        let mele = 6
        if (mele > 5) {
            setTimeout(() => {
                resolve('mele per tutti')
            }, 3000);
        } else {
            reject('le mele non sono abbastanza')

        }
    })
}

nuovaValuta().then(risultato => {
    console.log(risultato);
    evaMele().then(risultato => console.log(risultato))
});

Promise.race([nuovaValuta(), evaMele()]).then((risultato) => {
    console.log(risultato);
});