function firstvalue(cifra1, cifra2, callback){
    callback(cifra1 + cifra2)
}

firstvalue(20, 40, function(unionecifre){
    console.log(unionecifre)
})