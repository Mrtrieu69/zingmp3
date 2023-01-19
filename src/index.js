import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalStyles } from './components';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Router>
                        <GlobalStyles>
                            <App />
                            <ToastContainer autoClose={2000} closeButton={false} hideProgressBar limit={3} />
                        </GlobalStyles>
                    </Router>
                </Provider>
            </QueryClientProvider>
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
