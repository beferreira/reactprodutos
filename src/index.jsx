import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './router.jsx';
import Inicio from './pages/inicio/inicio.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
    <Inicio />
  </React.StrictMode>
);

