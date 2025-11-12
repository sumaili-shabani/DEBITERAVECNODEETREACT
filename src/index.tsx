import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';

// pour le text editor
import 'primereact/resources/themes/lara-light-blue/theme.css'; // ou un autre thème
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// fontawason icon
import '@fortawesome/fontawesome-free/css/all.min.css';

import './i18n'; // Import obligatoire

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-image-lightbox/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
