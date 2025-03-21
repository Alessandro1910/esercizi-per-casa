class Automobile {
    #contatoreChiamate = 0;

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0; class Automobile {
            #contatoreChiamate = 0;
        
            constructor(marca, modello, anno) {
                this.marca = marca;
                this.modello = modello;
                this.anno = anno;
                this.chilometraggio = 0; 
            }
        
            #calcolaEtà() {
                const annoCorrente = new Date().getFullYear();
                return annoCorrente - this.anno;
            }
        
            mostraEtà() {
                this.#contatoreChiamate++;
                return `L'auto ha ${this.#calcolaEtà()} anni.`;
            }
        
            _controllaChilometri() {
                if (this.chilometraggio > 100000) {
                    return "Attenzione: Il chilometraggio ha superato i 100.000 km!";
                }
                return "Il chilometraggio è nella norma.";
            }
        
            aggiungiChilometri(km) {
                if (km > 0) {
                    this.chilometraggio += km;
                } else {
                    console.log("I chilometri da aggiungere devono essere un valore positivo.");
                }
            }
        
            mostraChilometraggio() {
                this.#contatoreChiamate++;
                return `Chilometraggio attuale: ${this.chilometraggio} km`;
            }
        
            descrizione() {
                return `${this.marca} ${this.modello} del ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
            }
        
            getNumeroChiamate() {
                return `Il metodo è stato chiamato ${this.#contatoreChiamate} volte.`;
            }
        
            static confrontaChilometraggio(auto1, auto2) {
                if (auto1.chilometraggio > auto2.chilometraggio) {
                    return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore.`;
                } else if (auto1.chilometraggio < auto2.chilometraggio) {
                    return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore.`;
                } else {
                    return "Entrambe le auto hanno lo stesso chilometraggio.";
                }
            }
        }
        
        Automobile.prototype.saluta = function() {
            return `Ciao! Sono una ${this.marca} ${this.modello}.`;
        };
        
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
        
            verificaChilometraggio() {
                return this._controllaChilometri();
            }
        }
        
        const auto = new Automobile("Fiat", "Panda", 2022);
        auto.aggiungiChilometri(150);
        console.log(auto.mostraChilometraggio());
        console.log(auto.saluta());
        console.log(auto.mostraEtà());
        console.log(auto.getNumeroChiamate());
        
        const autoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);
        autoElettrica.aggiungiChilometri(200);
        console.log(autoElettrica.descrizione());
        autoElettrica.ricarica(50);
        console.log(autoElettrica.descrizione());
        console.log(autoElettrica.saluta());
        console.log(autoElettrica.mostraEtà());
        console.log(autoElettrica.verificaChilometraggio());
        
        console.log(Automobile.confrontaChilometraggio(auto, autoElettrica));
    }

    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    mostraEtà() {
        this.#contatoreChiamate++;
        return `L'auto ha ${this.#calcolaEtà()} anni.`;
    }

    _controllaChilometri() {
        if (this.chilometraggio > 100000) {
            return "Attenzione: Il chilometraggio ha superato i 100.000 km!";
        }
        return "Il chilometraggio è nella norma.";
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("I chilometri da aggiungere devono essere un valore positivo.");
        }
    }

    mostraChilometraggio() {
        this.#contatoreChiamate++;
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }

    descrizione() {
        return `${this.marca} ${this.modello} del ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
    }

    getNumeroChiamate() {
        return `Il metodo è stato chiamato ${this.#contatoreChiamate} volte.`;
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore.`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore.`;
        } else {
            return "Entrambe le auto hanno lo stesso chilometraggio.";
        }
    }
}

Automobile.prototype.saluta = function() {
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

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

    verificaChilometraggio() {
        return this._controllaChilometri();
    }
}

const auto = new Automobile("Fiat", "Panda", 2022);
auto.aggiungiChilometri(150);
console.log(auto.mostraChilometraggio());
console.log(auto.saluta());
console.log(auto.mostraEtà());
console.log(auto.getNumeroChiamate());

const autoElettrica = new Elettrica("Tesla", "Model 3", 2023, 400);
autoElettrica.aggiungiChilometri(200);
console.log(autoElettrica.descrizione());
autoElettrica.ricarica(50);
console.log(autoElettrica.descrizione());
console.log(autoElettrica.saluta());
console.log(autoElettrica.mostraEtà());
console.log(autoElettrica.verificaChilometraggio());

console.log(Automobile.confrontaChilometraggio(auto, autoElettrica));