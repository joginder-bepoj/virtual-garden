import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStorage from './Storage/UserStorage';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserStorage>
          <Toaster position='top-center'/>
          <App />
        </UserStorage>
    </BrowserRouter>
  </React.StrictMode>
);


