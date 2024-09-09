const listaPersone = {
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
console.log(listaAggiornataJson) 