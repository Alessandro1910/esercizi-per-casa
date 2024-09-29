/*let newF = document.getElementById('mioForm');

newF.addEventListener("submit", (event) => {
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;

    if(nome == "" || cognome == "") {
        alert('Compilare entrambi i campi')

    event.preventDefault();

    }
});*/

function nuovaF() {
    return new Promise((resolve,reject) => {
        let pizze = 7
        if(pizze > 8)
        setTimeout(() => {
            resolve('pizza per tutti')
        }, 5000)
        else {
            reject ('non ce ne per tutti')
        }
    })
}

nuovaF().then(result => console.log(result))


