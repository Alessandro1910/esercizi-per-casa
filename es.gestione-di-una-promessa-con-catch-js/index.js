function promettiMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolv("La promessa è stata risolta dopo 2 secondi!");
        }, 2000);
        try { ("se la promessa e risolta dacci ok")
            
        } catch (error) {
            console.log(error)
            
        }
    });
}
promettiMessaggio().then(messaggio => {
    console.log(messaggio);
});