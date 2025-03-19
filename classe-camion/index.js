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
  }
  
  // 🔹 Classe Camion che estende Automobile
  class Camion extends Automobile {
    constructor(modello, chilometraggio, capacitàCarico) {
      super(modello, chilometraggio); // Chiama il costruttore della classe padre
      this.capacitàCarico = capacitàCarico; // Nuova proprietà specifica per il Camion
    }
  
    // Metodo per caricare merce
    carica(quantità) {
      console.log(`Caricati ${quantità} kg di merce. Capacità totale: ${this.capacitàCarico} kg.`);
    }
  
    // Metodo per scaricare merce
    scarica(quantità) {
      console.log(`Scaricati ${quantità} kg di merce.`);
    }
  }
  
  // 🔹 Creazione di un oggetto Camion
  const mioCamion = new Camion("Volvo FH", 120000, 20000);
  
  console.log(mioCamion.chilometraggio); // Output: "120000 km"
  mioCamion.percorri(500); // Aggiunge 500 km
  console.log(mioCamion.chilometraggio); // Output: "120500 km"
  
  mioCamion.carica(5000); // Output: "Caricati 5000 kg di merce. Capacità totale: 20000 kg."
  mioCamion.scarica(3000); // Output: "Scaricati 3000 kg di merce."