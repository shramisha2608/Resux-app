import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.css'; // Changed path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);