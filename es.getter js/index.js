let kilometraggio = {
    nome: "pompa",
    cognome: "pompa due",

   set restituisce(restituisce) {
    if(restituisce >= "nuovo valore"){
        restituisce = "nuovo valore"
    }
    this._restituisce = restituisce
   },

   get restituisce(){
    return this._restituisce.toUpperCase()
   }
}

kilometraggio.restituisce = "nuovo valore"

console.log("restituisce: " + kilometraggio.restituisce)