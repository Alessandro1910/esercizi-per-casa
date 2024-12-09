// Array di todos
const todos = [
    { id: 1, title: 'Imparare TypeScript', completed: false, userId: 101 },
    { id: 2, title: 'Fare la spesa', completed: true, userId: 102 },
    { id: 3, title: 'Scrivere codice', completed: false, userId: 101 },
    { id: 4, title: 'Leggere un libro', completed: true },
];

const getUserTodos = (userId) => {
    return todos.filter((todo) => todo.userId === userId);
};

const user101Todos = getUserTodos(101);
console.log(`Todos per l'utente con ID 101:`, user101Todos);

