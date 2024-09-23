import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BooksProvider } from './context/books.context';
import { UsersProvider } from './context/users.context';
import { UsersHistoryProvider } from './context/usershistory.context';
import { BooksHistoryProvider } from './context/bookshistory.context';
import { AdminProvider } from './context/admin.context';
// index.js or App.js
import 'flowbite/dist/flowbite.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <UsersProvider>
          <BooksProvider>
            <UsersHistoryProvider>
              <BooksHistoryProvider>
                <App />
              </BooksHistoryProvider>
            </UsersHistoryProvider>
          </BooksProvider>
        </UsersProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
