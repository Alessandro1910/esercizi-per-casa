export class User {
    id: number;
    name: string;
    email?: string;

    // Costruttore per inizializzare le proprietà
    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}