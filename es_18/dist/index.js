import { TodoStatus, todo1, todo2, todo3 }  from './type';   // ce un errore qui ma non capisco dove ho importato todostatus
const todo1 = {
    id: 1,
    title: "Comprare il latte",
    completed: false,
    status: TodoStatus.Pending,
};
const todo2 = {
    id: 2,
    title: "Scrivere un articolo",
    completed: false,
    status: TodoStatus.InProgress,
};
const todo3 = {
    id: 3,
    title: "Fare esercizio fisico",
    completed: true,
    status: TodoStatus.Completed,
};
console.log(todo1);
console.log(todo2);
console.log(todo3);
