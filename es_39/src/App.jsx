import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; // Percorso dello store configurato
import Counter from './assets/Counter';
// Esempio di componente

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Redux Integration</h1>
                <Counter />
            </div>
        </Provider>
    );
};

export default App;