class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
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

    descrizione() {
        return `${this.marca} ${this.modello} del ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
    }
}

class Elettrica extends Automobile {
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `${super.descrizione()}, Autonomia: ${this.autonomia} km`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("I km di ricarica devono essere un valore positivo.");
        }
    }
}


const auto = new Automobile("Fiat", "Panda", 2022);
auto.aggiungiChilometri(150);
console.log(auto.mostraChilometraggio());

const autoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);
console.log(autoElettrica.descrizione());
autoElettrica.ricarica(50);
console.log(autoElettrica.descrizione());