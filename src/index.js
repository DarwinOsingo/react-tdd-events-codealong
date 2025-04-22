// index.js (or index.tsx)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // or './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// You can enable web vitals logging (optional)
reportWebVitals();
