import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
