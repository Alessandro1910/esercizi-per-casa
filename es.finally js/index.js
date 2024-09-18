/* function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');
    }); */

    function newFunction() {
        return new Promise(function (resolve, reject) {
            if(10 + 2 == 11) {
                resolve('ok');
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