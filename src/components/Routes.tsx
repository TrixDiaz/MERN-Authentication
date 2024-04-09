import {Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={ <Welcome/> } />
            </Routes>
        </>
    );
};

export default AppRoutes