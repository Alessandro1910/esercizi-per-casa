function nuovaValuta () {
    return new Promise((resolve, reject) => {
        let panini = 10
        if (panini > 9) {
            setTimeout(() => {
                resolve('ci sono panini per tutti')
            }, 3000);
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
            }, 4000);
        } else {
            reject('le mele non sono abbastanza')

        }
    })
}

function newAuto() {
    return new Promise((resolve, reject) => {
        let auto = 4
        if (auto > 5){
        setTimeout(()=> {
            resolve('3')
        }, 6000)
    }else {
        reject('non ci sono abbastanza auto')
    }
    })
} 

nuovaValuta().then((risultato) => {
    console.log(risultato);
    evaMele().then(risultato => console.log(risultato));
    newAuto().then(risultato => console.log(risultato));
});

const unioneFunzioni = [nuovaValuta, evaMele, newAuto];

Promise.allSettled(unioneFunzioni).then((risultato) =>
    risultato.forEach((risultato) => console.log(risultato.status)),
  );