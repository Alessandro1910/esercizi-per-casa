"use strict";
// Funzione error che lancia un errore
function error(message) {
    throw new Error(message);
}
try {
    error('Qualcosa è andato storto!');
}
catch (err) {
    console.error(err);
}
