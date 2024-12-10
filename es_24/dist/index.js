import { TodoStatus } from './types';
import { filterTodos } from './utils';
// Creazione di alcuni Todo
const todos = [
    { id: 101, title: "Comprare il latte", completed: false, status: TodoStatus.Pending },
    { id: 102, title: "Leggere un libro", completed: true, status: TodoStatus.Completed },
    { id: 103, title: "Fare esercizio fisico", completed: false, status: TodoStatus.InProgress },
    { id: 104, title: "Studiare TypeScript", completed: true, status: TodoStatus.Completed },
];
// Filtrare i Todo completati
const completedTodos = filterTodos(todos, (todo) => todo.completed);
console.log("Todo completati:", completedTodos);
// Filtrare i Todo con status Pending
const pendingTodos = filterTodos(todos, (todo) => todo.status === TodoStatus.Pending);
console.log("Todo in sospeso:", pendingTodos);
