async function newfunction() {
    return new Promise((resolve, reject) => {
        let pizza = 10
        if(pizza > 9)
        setTimeout(() => {
            resolve('Pizza per tutti')
        }, 5000);
    })
};

async function Pasta() {
    return new Promise((resolve, reject) => {
        let pasta = 10 
        if(pasta > 8)
            setTimeout(() => {
                resolve('Pasta per tutti')
        }, 7000)
    })
};

async function Frutta() {
    return new Promise((resolve, reject) => {
        let frutta = 10 
        if(frutta > 8)
            setTimeout(() => {
                resolve('Frutta per tutti')
        }, 7000)
    })
};

async function init() {
    let risultato = await newfunction()
    console.log(risultato);
}

init();

async function init() {
    let risultato = await Pasta()
    console.log(risultato);
}

init();

async function init() {
    let risultato = await Frutta()
    console.log(risultato);
}

init();