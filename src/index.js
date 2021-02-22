import React from 'react';
import { render } from 'react-dom';
// import colors from './color-data.json';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


