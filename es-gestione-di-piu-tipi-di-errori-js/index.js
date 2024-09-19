function manipolaStringa(stringa) {
    try {
      
        if (typeof stringa !== 'string') {
            throw new TypeError("Il parametro deve essere una stringa!");
        }
        let risultato = stringa.toUpperCase();
        console.log(risultato);

    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Errore di tipo:", error.message);
        } else {
            console.error("Errore generico:", error.message);
        }
    }
}

