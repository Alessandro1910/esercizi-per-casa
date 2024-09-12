let oggetto = {
    chiamata: "Saluti a casa",
    risposta: "non ha risposto",
    segreteria: "messaggio ricevuto"
}

let{chiamata, risposta, ...rest} = oggetto
console.log(chiamata, risposta, rest)






/*let newOggetto = {
    segreteria: "messaggio ricevuto"
}
function segreteria(...altrivalori){
    return altrivalori
}

console.log(segreteria("messaggio ricevuto"))*/