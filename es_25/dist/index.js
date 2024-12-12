import { TodoStatus } from './type';

let todos = [
    { id: 1, title: "Comprare il latte", completed: false, status: TodoStatus.Pending },
    { id: 2, title: "Leggere un libro", completed: true, status: TodoStatus.Completed },
    { id: 3, title: "Fare esercizio fisico", completed: false, status: TodoStatus.InProgress }
];

function updatePartialTodo(todoId, updates) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        console.error(`Todo con ID ${todoId} non trovato.`);
        return;
    }
    
    todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), updates);
}

updatePartialTodo(1, { completed: true, status: TodoStatus.Completed });
updatePartialTodo(2, { title: "Leggere un nuovo libro" });
updatePartialTodo(3, { metadata: { note: "Allenarsi per 30 minuti" } });

console.log(todos);
