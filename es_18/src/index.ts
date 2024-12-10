import { Todo, TodoStatus } from './type';

const todo1: Todo = {
    id: 1,
    title: "Comprare il latte",
    completed: false,
    status: TodoStatus.Pending,
};

const todo2: Todo = {
    id: 2,
    title: "Scrivere un articolo",
    completed: false,
    status: TodoStatus.InProgress,
};

const todo3: Todo = {
    id: 3,
    title: "Fare esercizio fisico",
    completed: true,
    status: TodoStatus.Completed,
};

console.log(todo1);
console.log(todo2);
console.log(todo3);