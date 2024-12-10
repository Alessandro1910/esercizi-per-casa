import { Todo, TodoStatus } from './type';

const todos: Todo[] = [
    { id: 1, title: "Comprare il latte", completed: false, status: TodoStatus.Pending },
    { id: 2, title: "Leggere un libro", completed: false, status: TodoStatus.InProgress },
    { id: 3, title: "Fare esercizio fisico", completed: true, status: TodoStatus.Completed },
];

function updateTodoStatus(todoId: number, status: TodoStatus): void {
    const todo = todos.find(t => t.id === todoId);
    
    if (todo) {
        todo.status = status;
        console.log(`Stato del todo con id ${todoId} aggiornato a: ${status}`);
    } else {
        console.error(`Todo con id ${todoId} non trovato.`);
    }
}

updateTodoStatus(1, TodoStatus.InProgress); // Aggiorna lo stato del Todo con id 1
updateTodoStatus(2, TodoStatus.Completed);  // Aggiorna lo stato del Todo con id 2
updateTodoStatus(4, TodoStatus.Pending);    // Tentativo di aggiornare un Todo inesistente


console.log(todos);