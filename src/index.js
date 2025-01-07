// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // import App from the same folder
import './index.css';     // optional global CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



