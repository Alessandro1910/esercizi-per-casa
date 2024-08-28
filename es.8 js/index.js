let barca = [];

for(let i = 1; i <= 5; i++){
    let word = prompt("inserisci una parola");
    barca.push(word);
}

console.log(barca);

for (let i of barca){
    if (i.length % 2 != 0 ){
        console.log(i);
    }
}