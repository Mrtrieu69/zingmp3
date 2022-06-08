import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalStyles } from './components';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

Modal.setAppElement('#root');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyles>
                <App />
                <ToastContainer autoClose={4000} closeButton={false} />
            </GlobalStyles>
        </Router>
    </React.StrictMode>,document.getElementById('root')
);
