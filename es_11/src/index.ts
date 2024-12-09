import { Todo } from './type';


const todos: Todo[] = [];


function addTodo(title: string, metadata?: any): Todo {
    const newTodo: Todo = {
        id: Date.now(),  
        title,
        completed: false,
        metadata,      
    };

    todos.push(newTodo);
    return newTodo;
}

const todo1 = addTodo('Imparare TypeScript');
console.log(todo1);

const todo2 = addTodo('Fare la spesa', { priority: 'alta', dueDate: '2024-06-30' });
console.log(todo2);

console.log(todos);
