import { Todo } from './type';

// Array di todos
const todos: Todo[] = [];

// Funzione addTodo per aggiungere un nuovo Todo
function addTodo(title: string, metadata?: string | object): Todo {
    const newTodo: Todo = {
        id: Date.now(),    // Genera un ID unico basato sul timestamp corrente
        title,
        completed: false,
        metadata,          // Assegna il valore di metadata se fornito
    };

    todos.push(newTodo);
    return newTodo;
}

// Funzione updateTodo per aggiornare parzialmente un Todo
function updateTodo(id: number, updates: Partial<Todo>): Todo | undefined {
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        console.error(`Todo con id ${id} non trovato.`);
        return undefined;
    }

    // Aggiorna solo le proprietà fornite in updates
    Object.assign(todo, updates);
    return todo;
}

// Esempi di utilizzo della funzione addTodo e updateTodo
const todo1 = addTodo('Imparare TypeScript');
console.log('Prima dell\'aggiornamento:', todo1);

const updatedTodo1 = updateTodo(todo1.id, { completed: true, metadata: 'Aggiornato' });
console.log('Dopo l\'aggiornamento:', updatedTodo1);

const todo2 = addTodo('Fare la spesa');
console.log('Prima dell\'aggiornamento:', todo2);

const updatedTodo2 = updateTodo(todo2.id, { title: 'Fare la spesa al supermercato', userId: 2 });
console.log('Dopo l\'aggiornamento:', updatedTodo2);

// Stampa l'array todos aggiornato
console.log('Tutti i todos:', todos);