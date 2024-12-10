export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
}

export interface TodoWithMetadata extends Todo {
    metadata: any;
}