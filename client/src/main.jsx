import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './ThemeContent.jsx';
import './index.css';
import Cursor from './components/Cursor.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Cursor />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
