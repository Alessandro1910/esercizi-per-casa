export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number; // Proprietà opzionale per associare un utente
}