const todos = [];

function addTodo(title, metadata) {
    const newTodo = {
        id: Date.now(), // Genera un ID unico basato sull'attuale timestamp
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

