import { User } from './user';
import { Todo, TodoStatus } from './types';

// Creazione di un utente
const user1 = new User(1, "Alice", "alice@example.com");

// Creazione di alcuni Todo
const todo1: Todo = { id: 101, title: "Comprare il latte", completed: false, status: TodoStatus.Pending };
const todo2: Todo = { id: 102, title: "Leggere un libro", completed: false, status: TodoStatus.InProgress };

// Aggiunta dei Todo all'utente
user1.addTodo(todo1);
user1.addTodo(todo2);

// Stampa dell'utente con i suoi Todo
console.log(user1);
console.log(user1.todos);