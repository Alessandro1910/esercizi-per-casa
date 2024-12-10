import { TodoStatus } from './type';

const todos = [];

function addTodo(title, metadata) {
    const newTodo = {
        id: Date.now(), 
        title,
        completed: false,
        status: TodoStatus.Pending, // Imposta lo status su Pending di default
        metadata,
    };
    todos.push(newTodo);
    return newTodo;
}

const newTodo = addTodo("Studiare TypeScript");
console.log(newTodo);
console.log(todos);
