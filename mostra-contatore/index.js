class Veicolo {
    constructor() {
      this.chilometriTotali = 0;
      this.contatoreChiamate = 0;
    }
  
    aggiungiChilometri(km) {
      if (typeof km !== 'number' || km < 0) {
        console.error('Inserisci un numero valido di chilometri.');
        return;
      }
      this.chilometriTotali += km;
      this.contatoreChiamate++;
    }
  
    mostraContatoreChiamate() {
      return this.contatoreChiamate;
    }
  }
  
  
  const auto = new Veicolo();
  
  auto.aggiungiChilometri(10);
  auto.aggiungiChilometri(15);
  auto.aggiungiChilometri(5);
  
  console.log(`Il metodo aggiungiChilometri è stato chiamato ${auto.mostraContatoreChiamate()} volte.`);