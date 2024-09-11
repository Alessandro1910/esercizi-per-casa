let oggetto = {
   nome: "Alessandro",
   paese: "Italia"
}

let { nome, paese, cognome = "Turacci", eta = 30} = oggetto;

console.log(nome)
console.log(cognome)
console.log(paese)
console.log(eta)

