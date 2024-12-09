//Importo il percorso
import { Todo } from './type';

const todos: Todo[] = [
    { id: 1, title: 'Imparare TypeScript', completed: false },
    { id: 2, title: 'Fare la spesa', completed: false },
    { id: 3, title: 'Scrivere codice', completed: true },
];


const assignTodoToUser = (todoId: number, userId: number): void => {
    const todo = todos.find((t) => t.id === todoId);
    if (todo) {
        todo.userId = userId;
        console.log(`Assegnato l'utente con ID ${userId} al todo con ID ${todoId}`);
    } else {
        console.log(`Todo con ID ${todoId} non trovato.`);
    }
};


assignTodoToUser(2, 101); // Assegna l'utente con ID 101 al todo con ID 2


console.log(todos);