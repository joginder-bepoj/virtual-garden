import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStorage from './Storage/UserStorage';
import AdminStorage from './Storage/AdminStorage';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/virtual-garden'>
      <AdminStorage>
        <UserStorage>
          <Toaster position='top-center'/>
          <App />
        </UserStorage>
      </AdminStorage>
    </BrowserRouter>
  </React.StrictMode>
);


