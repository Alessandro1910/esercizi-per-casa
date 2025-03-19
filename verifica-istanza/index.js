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
  
    static verificaIstanza(obj, classe) {
      if (obj instanceof classe) {
        return `${obj.modello} è un'istanza di ${classe.name}`;
      } else {
        return `${obj.modello} NON è un'istanza di ${classe.name}`;
      }
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
  }
  
  const miaAuto = new Automobile("Fiat Panda", 50000);
  const mioCamion = new Camion("Volvo FH", 120000, 5000, 20000);
  
  console.log(miaAuto instanceof Automobile); 
  console.log(mioCamion instanceof Camion); 
  console.log(mioCamion instanceof Automobile); 
  console.log(miaAuto instanceof Camion); 
  
  console.log(Automobile.verificaIstanza(miaAuto, Automobile)); 
  
  
  console.log(Automobile.verificaIstanza(mioCamion, Camion)); 
  
  
  console.log(Automobile.verificaIstanza(mioCamion, Automobile)); 
 
  
  console.log(Automobile.verificaIstanza(miaAuto, Camion)); 
  