export function convertArrayToRecord(todos) {
    return todos.reduce((record, todo) => {
        record[todo.id] = todo;
        return record;
    }, {});
}
