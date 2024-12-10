export class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = []; // Inizializza todos come un array vuoto
    }
    // Metodo per aggiungere un Todo all'array dell'utente
    addTodo(todo) {
        this.todos.push(todo);
    }
}
