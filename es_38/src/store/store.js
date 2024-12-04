import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Importa il reducer dello slice

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Registra il reducer nello store
  },
});