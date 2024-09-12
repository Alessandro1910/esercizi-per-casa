const number = [1, 30, 40, 50];

console.log(number);

const copynumber = [...number, 60, 70];

number[0] = 10;

console.log(copynumber);