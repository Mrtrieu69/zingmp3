import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from './routes';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout';
import { Context } from './context';

function App() {
    const [forceRerender, setForceRerender] = useState(false);

    return (
        <Context.Provider value={{ forceRerender, setForceRerender }}>
            <Routes>
                {mainRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Context.Provider>
    );
}

export default App;
