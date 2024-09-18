/*const listaPersone = {
    titolo: "Persone",
    elementi: [
       "Alessandro",
        "Marco",
        "Ana",
        "Mattia"
    ]
};

const listaPersoneJson = JSON.stringify(listaPersone)
console.log(listaPersoneJson)

const convertireLista = '{"nome": "Alessandro", "nome" : "Ana", "nome" : "Marco", "nome" : "Mattia", "nome" : "Francesco"}'
const oggettoReale = JSON.parse(convertireLista)
console.log(oggettoReale.nome)

const listaAggiornata = {
    persone: [
        "Alessandro",
        "Marco",
        "Ana",
        "Mattia",
        "Francesco" 
    ]
}; 

const listaAggiornataJson = JSON.stringify(listaAggiornata)
console.log(listaAggiornataJson) */


let nuovaVariabile = `[
    {
        "nome": "alessandro", 
        "cognome": "turacci"
    },
    {   
        "nome": "francesco", 
        "cognome": "orazini"
    }
]`;

nuovaVariabile = JSON.parse(nuovaVariabile)

console.log(nuovaVariabile)

let nuovoOggetto = {
    nome: "Alfredo",
    cognome: "Capri"
};
nuovaVariabile[nuovaVariabile.length] = nuovoOggetto

//nuovaVariabile.push(nuovoOggetto)

let nuovaVariabileJSON = JSON.stringify(nuovaVariabile)

console.log(nuovaVariabileJSON)