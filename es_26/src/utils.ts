import { Todo, TodoRecord } from './types';

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
    return todos.reduce((record, todo) => {
        record[todo.id] = todo;
        return record;
    }, {} as TodoRecord);
}
