// Funzione error che lancia un errore e ha il tipo di ritorno never
function error(message: string): never {
    throw new Error(message);
}

// Funzione parseInput che gestisce input di tipo unknown
function parseInput(input: unknown): string {
    if (typeof input === 'string') {
        return input;
    } else if (typeof input === 'number') {
        return input.toString();
    } else {
        error('Input non valido: deve essere una stringa o un numero');
    }
}

// Esempi di utilizzo della funzione parseInput
try {
    console.log(parseInput('Ciao mondo!')); // Output: Ciao mondo!
    console.log(parseInput(42));            // Output: "42"
    console.log(parseInput(true));          // Lancia un errore
} catch (err) {
    console.error(err);
}