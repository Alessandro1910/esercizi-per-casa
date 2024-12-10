import { User } from './user';
import { TodoStatus } from './types';
// Creazione di utenti
const user1 = new User(1, "Alice", "alice@example.com");
const user2 = new User(2, "Bob", "bob@example.com");
// Creazione di alcuni Todo
const todo1 = { id: 101, title: "Comprare il latte", completed: false, status: TodoStatus.Pending };
const todo2 = { id: 102, title: "Leggere un libro", completed: false, status: TodoStatus.InProgress };
const todo3 = { id: 103, title: "Fare esercizio fisico", completed: false, status: TodoStatus.Pending };
const todo4 = { id: 104, title: "Studiare TypeScript", completed: false, status: TodoStatus.Pending };
// Aggiunta dei Todo agli utenti
user1.addTodo(todo1);
user1.addTodo(todo2);
user2.addTodo(todo3);
user2.addTodo(todo4);
// Stampa degli utenti con i loro Todo
console.log("User 1:", user1);
console.log("Todos di User 1:", user1.todos);
console.log("User 2:", user2);
console.log("Todos di User 2:", user2.todos);
