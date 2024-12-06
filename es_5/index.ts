import { Todo } from './todo';

// Array Vuoto
const todos: Todo[] = [];

// Funzione per generare ID unico
const generateUniqueId = (): number => {
    return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
};

// Funzione addTodo
const addTodo = (title: string): Todo => {
    const newTodo: Todo = {
        id: generateUniqueId(),
        title,
        completed: false,
    };

    todos.push(newTodo); // Aggiungi nuovo Todo all'array
    return newTodo; // Ritorna un nuovo Todo
};

const addedTodo = addTodo('Scrivere codice TypeScript');
console.log(addedTodo); // Mostra il nuovo Todo
console.log(todos); // Mostra l'array todos aggiornato