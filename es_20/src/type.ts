export enum TodoStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    status: TodoStatus;
    userId?: number;
    metadata?: string | object;
}