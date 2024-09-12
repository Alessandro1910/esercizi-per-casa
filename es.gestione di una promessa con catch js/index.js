function promettiMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta dopo 2 secondi!");
        }, 2000);
    });
}
promettiMessaggio().then(messaggio => {
    console.log(messaggio);
});

