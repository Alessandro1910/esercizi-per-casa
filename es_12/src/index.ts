import { TodoWithMetadata } from './type';


function createTodoWithMetadata(title: string, metadata: any): TodoWithMetadata {
    return {
        id: Date.now(), // Generare un ID unico basato sul timestamp corrente
        title,
        completed: false,
        metadata,
    };
}

const todoWithMeta = createTodoWithMetadata('Studiare TypeScript', { priority: 'alta', dueDate: '2024-07-01' });
console.log(todoWithMeta);