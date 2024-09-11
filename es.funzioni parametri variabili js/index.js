/* function unisci(cifra1, cifra2, cifra3) {
    return cifra1 + cifra2 + cifra3;
}

console.log(unisci(4, 10, 50))*/

function sum(...piuNumeri) {
  let total = 0;
  for (const numeri of piuNumeri) {
    total += numeri;
  }
  return total;
}

console.log(sum(10, 12, 13));

console.log(sum(11, 22, 3, 14));

console.log(sum(31, 22, 3, 24));

console.log(sum(41, 12, 13, 34));
