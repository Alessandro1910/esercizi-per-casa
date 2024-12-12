import { Todo, TodoStatus, PartialTodo } from './type';

// Simuliamo un array di Todo
let todos: Todo[] = [
    { id: 1, title: "Comprare il latte", completed: false, status: TodoStatus.Pending },
    { id: 2, title: "Leggere un libro", completed: true, status: TodoStatus.Completed },
    { id: 3, title: "Fare esercizio fisico", completed: false, status: TodoStatus.InProgress }
];

// Funzione per aggiornare parzialmente un Todo
function updatePartialTodo(todoId: number, updates: PartialTodo): void {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if (todoIndex === -1) {
        console.error(`Todo con ID ${todoId} non trovato.`);
        return;
    }

    // Aggiorna solo le proprietà specificate
    todos[todoIndex] = { ...todos[todoIndex], ...updates };
}

// Esempi di utilizzo della funzione
updatePartialTodo(1, { completed: true, status: TodoStatus.Completed });
updatePartialTodo(2, { title: "Leggere un nuovo libro" });
updatePartialTodo(3, { metadata: { note: "Allenarsi per 30 minuti" } });

// Stampa dei Todo aggiornati
console.log(todos);