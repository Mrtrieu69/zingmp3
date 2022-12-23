import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from './routes';
import { useState } from 'react';

import Layout from './Layout';
import { Context } from './context';

function App() {
    const [forceRerender, setForceRerender] = useState(false);
    const [timer, setTimer] = useState(null);

    return (
        <Context.Provider value={{ forceRerender, setForceRerender, timer, setTimer }}>
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
