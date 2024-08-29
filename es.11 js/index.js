let score = prompt('inserisci un numero');
parseInt("inserisci un numero");


if (score <= 100 && score >= 90){
  console.log('il voto e ottimo')
}else if (score >= 70 && score <= 89){
    console.log('voto buono')
} else if (score >= 60 && score <= 69){
    console.log('voto sufficiente')
}else {
    console.log('voto insufficiente')
}