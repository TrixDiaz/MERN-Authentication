import {Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Dashboard from "@/components/Dashboard"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={ <Welcome/> } />
                <Route path={'/dashboard'} element={ <Dashboard/> } />
            </Routes>
        </>
    );
};

export default AppRoutes