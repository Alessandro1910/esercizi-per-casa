import { Todo, TodoStatus } from './type';

const todos: Todo[] = [];


function addTodo(title: string, metadata?: string | object): Todo {
    const newTodo: Todo = {
        id: Date.now(), // Genera un ID unico basato sul timestamp corrente
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