function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Dati da fetchData1");
      }, 2000); // Risolve dopo 2 secondi
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Dati da fetchData2");
      }, 1000); // Risolve dopo 1 secondo
    });
  }
  
  async function fetchInSeries() {
    console.log("Inizio operazioni...");
  
    const data1 = await fetchData1();
    console.log("Risultato 1:", data1);
  
    const data2 = await fetchData2();
    console.log("Risultato 2:", data2);
  
    console.log("Tutte le operazioni completate!");
  }
  
  fetchInSeries();