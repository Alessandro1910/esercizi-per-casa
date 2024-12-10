import { Project, User, Todo } from './type';


function createProject(name: string, users: User[], todos: Todo[]): Project {
    return {
        id: Date.now(), 
        name,
        users,
        todos,
    };
}

const user1: User = {
    id: 1,
    name: "Mario Rossi",
    email: "mario.rossi@example.com",
    todos: [
        { id: 101, title: "Comprare il latte", completed: false },
    ],
};

const user2: User = {
    id: 2,
    name: "Luisa Bianchi",
    todos: [
        { id: 102, title: "Leggere un libro", completed: true },
    ],
};

const todos: Todo[] = [
    { id: 201, title: "Imparare TypeScript", completed: false, userId: 1 },
    { id: 202, title: "Fare la spesa", completed: true, userId: 2 },
];


const project = createProject("Progetto di esempio", [user1, user2], todos);


console.log(project);