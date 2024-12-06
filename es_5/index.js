"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const todos = [];

const generateUniqueId = () => {
    return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
};

const addTodo = (title) => {
    const newTodo = {
        id: generateUniqueId(),
        title,
        completed: false,
    };
    todos.push(newTodo); 
    return newTodo; 
};

const addedTodo = addTodo('Scrivere codice TypeScript');
console.log(addedTodo); 
console.log(todos);
