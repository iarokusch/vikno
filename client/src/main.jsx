import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Container from './context/Container.jsx';
import axios from 'axios';
if (import.meta.env.DEV) {
    axios.defaults.baseURL = 'http://localhost:4000';
}
export const axiosWithToken = axios.create({
    headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
    },
});
ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Container>
            <App />
        </Container>
    </HashRouter>
);
