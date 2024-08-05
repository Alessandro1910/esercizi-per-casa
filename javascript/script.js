let number = 3;
let number1 = "3";
/* 
number = number + 1;

number += 1;

number++; */ 
/*
const result = number != number1 || number % 2 != 0; 

// and si scrive con "&&""

// oppure in inglese "Or" si scrive con "||"

// "!=" significa non uguale 

// "="

console.log(result);

if (number > 1 || number < 4) {
    console.log("test 1");
} else if (number >= 4 || number < 6){
    console.log("test 2")
} else{
    console.log("test 3")
} */

function print(message) {
    console.log(message)
}
/*
let res = 0;

function sum(ref, n1, n2) {
	ref += n1 + n2;
}

sum(res, 1, 2)

console.log(res);

function sum1(ref, n1, n2) {
	ref += n1 + n2;
  
  return ref;
}

console.log(sum1(res, 2, 3))
*/

function lowerThan(n1, n2) {
    if (n1 < n2){
        return "n1 e minore di n2"
    } else {
        return "n1 e maggiore o uguale di n2"
    } 
 //  return n1 < n2 
}


console.log(lowerThan(3, 5))

/*se questo numero e pari mi restituisce un testo con il numero e pari */

function checkIfOdd(n1){
    if (n1 % 2 == 0) {
        return "mi rest un numero pari"
    } else {
        return "mi rest un numeri dispari"
    }
}

console.log(checkIfOdd(3))

