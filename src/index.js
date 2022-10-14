import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalStyles } from './components';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';

Modal.setAppElement('#root');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GlobalStyles>
                    <App />
                    <ToastContainer autoClose={4000} closeButton={false} />
                </GlobalStyles>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
