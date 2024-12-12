import { TodoStatus } from './types';
import { convertArrayToRecord } from './utils';
const todos = [
    { id: 1, title: "Comprare il latte", completed: false, status: TodoStatus.Pending },
    { id: 2, title: "Leggere un libro", completed: true, status: TodoStatus.Completed },
    { id: 3, title: "Fare esercizio fisico", completed: false, status: TodoStatus.InProgress },
    { id: 4, title: "Studiare TypeScript", completed: false, status: TodoStatus.Pending }
];
const todoRecord = convertArrayToRecord(todos);
console.log(todoRecord);
