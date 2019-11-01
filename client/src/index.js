import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import BankProvider from './context/BankProvider'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <BankProvider>
                <App />
            </BankProvider>
        </UserProvider>
    </BrowserRouter>, 
document.getElementById('root'));