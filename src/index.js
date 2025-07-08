//import des fichiers js css et packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react le rajoute en mode de développement
  <React.StrictMode>
    {/* où il va y avoir le rendu : App */}
    <App />
  </React.StrictMode>
);


