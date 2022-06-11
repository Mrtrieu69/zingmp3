import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from './routes';
import Layout from './Layout';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
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
            <audio id="audio" src="/music/favorite/tu-thich-thich-thanh-thuong-thuong.mp3"></audio>
        </div>
    );
}

export default App;
