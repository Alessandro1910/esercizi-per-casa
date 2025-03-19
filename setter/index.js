class Auto {
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
  }
  
  const miaAuto = new Auto("Toyota Corolla", 50000);
  
  console.log(miaAuto.chilometraggio); 
  
  miaAuto.chilometraggio = 52000; 
  console.log(miaAuto.chilometraggio); 
  
  miaAuto.chilometraggio = 51000;

  
  console.log(miaAuto.chilometraggio); 