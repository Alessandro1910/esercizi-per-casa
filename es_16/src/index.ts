import { Todo } from './type';

// Funzione che restituisce una tupla con titolo e stato di completamento di un Todo
function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed];
}

// Esempi di utilizzo della funzione getTodoSummary
const exampleTodo1: Todo = {
    id: 1,
    title: "Imparare TypeScript",
    completed: false,
};

const exampleTodo2: Todo = {
    id: 2,
    title: "Fare la spesa",
    completed: true,
};

console.log(getTodoSummary(exampleTodo1)); // Output: [ 'Imparare TypeScript', false ]
console.log(getTodoSummary(exampleTodo2)); // Output: [ 'Fare la spesa', true ]
