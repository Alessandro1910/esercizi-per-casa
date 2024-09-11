/* function somma(...piuNumeri) {
  let total = 0 + piuNumeri;
    return total;
}

console.log(somma(10, 12, 13));

console.log(somma(11, 22, 3, 14));

console.log(somma(31, 22, 3, 24));

console.log(somma(41, 12, 13, 34));*/

function somma(...piuNumeri) {
  let total = 0;
  for (const numeri of piuNumeri) {
    total += numeri;
  }
  return total;
}

console.log(somma(10, 12, 13));

console.log(somma(11, 22, 3, 14));

console.log(somma(31, 22, 3, 24));

console.log(somma(41, 12, 13, 34));
