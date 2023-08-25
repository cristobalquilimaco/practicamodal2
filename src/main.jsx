import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import React from 'react';
import App from './App';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(root).render(rootElement);