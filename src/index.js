import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
  document.getElementById('root')
);
