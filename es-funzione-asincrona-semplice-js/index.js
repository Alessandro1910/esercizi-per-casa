async function nuovaFunzione() {
    return new Promise((resolve, reject) => {
        let banana = 4
        if(banana > 2)
        setTimeout(()=> {
            resolve('ci sono banane per tutti')
        }, 2000)
    })
}

async function init() {
    let risultato = await nuovaFunzione();
    console.log(risultato)
}

init();


/*async function nuovaFeature() {
    return 'risultato'
}

async function inizio() {
    let risultato = await nuovaFeature()
    console.log(risultato)
}

inizio();*/