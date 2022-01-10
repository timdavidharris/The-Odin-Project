import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Overview from "./components/Overview"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Overview />
  </React.StrictMode>,
  document.getElementById('root')
);
