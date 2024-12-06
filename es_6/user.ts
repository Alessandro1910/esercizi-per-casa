import { User } from './types';

const user1: User = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
};

const user2: User = {
    id: 2,
    name: 'Bob',
    // email è opzionale e può essere omesso
};

console.log(user1);
console.log(user2);