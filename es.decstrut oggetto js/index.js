let oggetto = {
    chiamata: "Saluti a casa",
    risposta: "non ha risposto",
    segreteria: "messaggio ricevuto"
}

let{chiamata, risposta} = oggetto
console.log(chiamata, risposta)

let {...rest} = ["messaggio ricevuto"]

console.log(rest)




/*let newOggetto = {
    segreteria: "messaggio ricevuto"
}
function segreteria(...altrivalori){
    return altrivalori
}

console.log(segreteria("messaggio ricevuto"))*/