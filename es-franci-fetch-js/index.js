const result = fetch("https://api.openbrewerydb.org/v1/breweries") // chiamata fetch al link e dichiarazione variabile
function quandoLaFetchPronta(risposta) {
    console.log(risposta)
    if (risposta.ok == true) {
        const responsejson = risposta.json(); // abbiamo chiamato metodo json che restituisce promise e la salviamo in responsejson nome variabile

        console.log(responsejson)
        responsejson.then(function (birrerie) {  // invocare .then della promise restituito dalla riga 5

            console.log(birrerie)
            for (let i = 0; i < birrerie.length; i++) {
                const birreria = birrerie[i];
                const nome = birreria.name
                console.log(nome)

                const li = document.createElement('li');

                const ul = document.querySelector('ul');
                ul.appendChild(li);
                li.append(nome);
            }
        })

    }

}
result.then(quandoLaFetchPronta)
/* result.then(() => {  altro modo di dichiarare
}) */

// to do : refactorizzare il codice per renderlo piu leggibile (usare async e await e "=>" )


