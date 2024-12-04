import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReduxProvider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
