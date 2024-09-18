function newFunction() {
  return new Promise(function (resolve, reject) {
    if (10 + 2 == 11) {
      resolve('dammi ok');
    } else {
      reject('dimmi di no');
    }
  });
}

newFunction()
  .then((numero) => {
    console.log(numero);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Operazione completata comunque');
  });