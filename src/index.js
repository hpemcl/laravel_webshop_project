import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/input.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

// const http = require('http');
// const https = require('https');
// const axios = require('axios');
// require("dotenv").config();

// const agent = new https.Agent({
//   rejectUnauthorized: false
// });

// const PORT = process.env.PORT || 3000;

// const app = http.createServer((req, res) => {
//   if (req.url == "/products" && req.method == "GET") {
//       // get the token
//       let token = `${process.env.consumer_key}:${process.env.consumer_secret}`;
//       // get the base 64 encoded string.
//       let basic_auth = Buffer.from(token).toString('base64');
//       // Send request to get the data.
//       axios.default.get('http://localhost:8080/wp-json/wc/v3/products', {
//           httpsAgent: agent,
//           headers: {
//               'Content-Type': 'application/json',
//               'Authorization': 'Basic ' + basic_auth
//           }
//       })
//           .then((response) => {
//               // Successful response
//               console.log("Successful request");
//               res.statusCode = response.status;
//               res.writeHead(200, { 'Content-Type': 'application/json' });
//               res.end(JSON.stringify(response.data));
//           })
//           .catch((error) => {
//               // Unsuccessful response
//               console.log("Unsuccessful request");
//               let message = new Error(error.message);
//               res.statusCode = 500;
//               res.end(JSON.stringify(message));
//           })
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
