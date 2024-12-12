import { Todo } from './types';

export interface User {
    id: number;
    name: string;
    email?: string;
    readonly todos: readonly Todo[];
}