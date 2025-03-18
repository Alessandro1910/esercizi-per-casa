import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterreducer' // esempio di slice

const store = configureStore({
    reducer: {
        counter: counterReducer, // Aggiungi i tuoi reducer qui
    },
});

export default store;