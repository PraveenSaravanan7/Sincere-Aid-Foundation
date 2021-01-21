import React from 'react';
import ReactDOM from 'react-dom';
import './Bootstraps-custom.scss'
import 'jquery/dist/jquery.slim'
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

