class Automobile {
    constructor(modello, chilometraggio) {
      this.modello = modello;
      this._chilometraggio = chilometraggio;
    }
  
    get chilometraggio() {
      return `${this._chilometraggio} km`;
    }
  
    set chilometraggio(nuovoChilometraggio) {
      if (nuovoChilometraggio >= this._chilometraggio) {
        this._chilometraggio = nuovoChilometraggio;
      } else {
        console.log("Errore: Il chilometraggio non può diminuire!");
      }
    }
  
    percorri(km) {
      if (km > 0) {
        this._chilometraggio += km;
      } else {
        console.log("Errore: I chilometri devono essere un valore positivo.");
      }
    }
  
    descrizione() {
      return `Modello: ${this.modello}, Chilometraggio: ${this.chilometraggio}`;
    }
  }
  
  class Camion extends Automobile {
    constructor(modello, chilometraggio, capacitàCarico, caricoMassimo) {
      super(modello, chilometraggio); 
      this.capacitàCarico = capacitàCarico; 
      this.caricoMassimo = caricoMassimo; 
    }

    descrizione() {
      return `${super.descrizione()}, Carico attuale: ${this.capacitàCarico} kg, Carico massimo: ${this.caricoMassimo} kg`;
    }
  
    carica(kg) {
      if (this.capacitàCarico + kg <= this.caricoMassimo) {
        this.capacitàCarico += kg;
        console.log(`Caricati ${kg} kg. Carico attuale: ${this.capacitàCarico} kg.`);
      } else {
        console.log(`Errore: Il carico supera il massimo di ${this.caricoMassimo} kg!`);
      }
    }
  
    scarica(kg) {
      if (this.capacitàCarico - kg >= 0) {
        this.capacitàCarico -= kg;
        console.log(`Scaricati ${kg} kg. Carico attuale: ${this.capacitàCarico} kg.`);
      } else {
        console.log("Errore: Non puoi scaricare più di quanto hai caricato!");
      }
    }
  }
  

  const mioCamion = new Camion("Volvo FH", 120000, 5000, 20000);
  
  console.log(mioCamion.descrizione()); 

  
  mioCamion.percorri(1000);
  console.log(mioCamion.descrizione()); 
 
  
  mioCamion.carica(10000); 

  
  mioCamion.carica(6000);  
  
  
  mioCamion.scarica(3000); 