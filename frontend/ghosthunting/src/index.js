import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Products from './products';
import reportWebVitals from './reportWebVitals';

import Navbar from './component/navbar';
import Footer from './component/footer';

import './style/font.css';
import './style/input.css';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Products />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
