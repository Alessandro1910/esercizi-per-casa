

function cliccami() {   // DICHIARO FUNZIONE 
    let pippo = document.getElementById('listaContainer') // CREO VARIABILE COLLEGANDOLA ALL ID

    let ul = document.createElement('ul') // CREO UNA LISTA UL

    for (i = 0; i < 3; i++) {                            // CREO UN CICLO FOR CHE MI RIPETERA E CREERA UNA LISTA FINO AD ARRIVARE AD UN MASSIMO DI 3
        let li = document.createElement('li')             // CREO ELEMENTI CHE ANDRANNO DENTRO LA LISTA 

        ul.appendChild(li)               // METTO GLI ELEMENTI DENTRO LA LISTA "LI DENTRO UL"
    }

    pippo.append(ul)     // METTO TUTTO CIO CHE CONTIENE L'UL DENTRO LA VARIABILE PIPPO CHE E COLLEGATA A SUA VOLTA A LISTA CONTAINER
}

