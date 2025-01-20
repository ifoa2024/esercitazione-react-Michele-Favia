import React from 'react';
import ReactDOM from 'react-dom/client'; // Nota: usa 'react-dom/client'
import App from './App';

// Selezionare l'elemento root
const root = ReactDOM.createRoot(document.getElementById('root'));

// metodo render su root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
