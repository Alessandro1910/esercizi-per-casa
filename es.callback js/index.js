function sommaValori(valore1, valore2, callback){
    callback(valore1 +valore2)
}

sommaValori(10, 15, function(totalesomma){
    console.log(totalesomma)
});