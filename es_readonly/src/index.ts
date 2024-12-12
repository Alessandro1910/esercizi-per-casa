import { User, Todo, TodoStatus } from './types';

const user: User = {
    id: 1,
    name: "Mario Rossi",
    email: "mario.rossi@example.com",
    todos: [
        { id: 101, title: "Comprare il latte", completed: false, status: TodoStatus.Pending },
        { id: 102, title: "Leggere un libro", completed: true, status: TodoStatus.Completed },
    ]
};

// Tentativo di modificare l'array (causerà un errore)
user.todos.push({ id: 103, title: "Fare esercizio", completed: false, status: TodoStatus.InProgress }); // Errore!

console.log(user);