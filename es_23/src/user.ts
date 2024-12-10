import { Todo } from './types'; // Import del tipo Todo

export class User {
    id: number;
    name: string;
    email?: string;
    todos: Todo[]; // Proprietà todos per memorizzare i Todo dell'utente

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = []; // Inizializza todos come un array vuoto
    }

    // Metodo per aggiungere un Todo all'array dell'utente
    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}