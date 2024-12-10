function createTodoWithMetadata(title, metadata) {
    return {
        id: Date.now(), 
        title,
        completed: false,
        metadata,
    };
}

const todoWithMeta = createTodoWithMetadata('Studiare TypeScript', { priority: 'alta', dueDate: '2024-07-01' });
console.log(todoWithMeta);

