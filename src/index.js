import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './components/GlobalStyle/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyle>
  </React.StrictMode>
);
