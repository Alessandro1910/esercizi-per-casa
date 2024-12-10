import { Todo } from './type';

const todos: Todo[] = [];

function addTodo(title: string, metadata?: string | object): Todo {
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

const todo2 = addTodo('Fare la spesa', 'Priorità alta');
console.log(todo2);

const todo3 = addTodo('Organizzare la scrivania', { priority: 'media', dueDate: '2024-07-01' });
console.log(todo3);

// Stampa l'array todos aggiornato
console.log(todos);