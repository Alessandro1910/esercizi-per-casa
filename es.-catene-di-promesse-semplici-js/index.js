function promettiMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta dopo 1 secondo!");
        }, 1000);
    });
}

promettiMessaggio()
  .then((risultato) => {
    console.log(risultato);
    return (1 * 2 + 3)
  })
  .then((numero) => {
    console.log(numero);
    return (1 * 2 + 3)
  })
  .finally(() => {
    console.log('Operazione completata comunque');
  });