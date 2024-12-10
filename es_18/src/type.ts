export enum TodoStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
}

// Interfaccia Todo aggiornata con la proprietà status
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    status: TodoStatus; // Nuova proprietà status
    userId?: number;
    metadata?: string | object;
}