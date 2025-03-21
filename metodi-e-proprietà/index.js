class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0; // Nuova proprietà
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("I chilometri da aggiungere devono essere un valore positivo.");
        }
    }

    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }
}

// Esempio di utilizzo
const auto = new Automobile("Fiat", "Panda", 2022);
auto.aggiungiChilometri(150);
console.log(auto.mostraChilometraggio());