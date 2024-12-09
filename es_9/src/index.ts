// Funzione error che lancia un errore
function error(message: string): never {
    throw new Error(message);
}

try {
    error('Qualcosa è andato storto!');
} catch (err) {
    console.error(err);
}