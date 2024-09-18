function Persona(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
    this.bio = function(){
        console.log(`${this.nome} ${this.cognome} e ${(this.genere == 'maschio')? 
            'un ragazzo': 'una ragazza'} di ${this.eta} 
            anni a cui piace ${this.interessi.join(', ')}`);
    };
this.saluta = function(){
    console.log(`ciao sono ${this.nome}`);
};
}

const persona1 = new Persona('luca', 'rossi', 23, ['basket', 'calcio']);
const persona2 = new Persona("angela", "verdi", 19, ["musica", "ballo"]);

persona1.bio();