const Mieiorologi = {
    marca: "rolex",
    modello: "daytona",
    colore: "nero"
  }

  console.log(Mieiorologi)

const vintageorologi = {
    marca: "rolex",
    modello: "daytona",
    colore: "nero",
    tipo: "pelle"
  }
  
const unioneorologi = {...Mieiorologi, ...vintageorologi};

console.log(unioneorologi)