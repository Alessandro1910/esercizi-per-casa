class Auto {
    constructor(modello, chilometraggio) {
      this.modello = modello;
      this._chilometraggio = chilometraggio; 
    }
  

    get chilometraggio() {
      return `${this._chilometraggio} km`; 
    }
  
    percorri(km) {
      if (km > 0) {
        this._chilometraggio += km; 
      } else {
        console.log("I chilometri devono essere un valore positivo."); 
      }
    }
  }
  
  const miaAuto = new Auto("Toyota Corolla", 50000); 
  
  console.log(miaAuto.chilometraggio); 
  
  miaAuto.percorri(1500); 
  console.log(miaAuto.chilometraggio);