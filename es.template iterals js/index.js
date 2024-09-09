/*function oggetto(nome, cognome){
    let = "Alessandro";

    let = `turacci ${nome}`;
}

console.log(nome)*/

const OggettoBase = {
    nome: "Paolo",
    cognome: "Rossi"
}

function stampaOggetto(valoreoggetto){
    return `${valoreoggetto.nome} ${valoreoggetto.cognome}`
}

const newvariabile = stampaOggetto(OggettoBase);
console.log(newvariabile)

//console.log(stampaOggetto(OggettoBase))

