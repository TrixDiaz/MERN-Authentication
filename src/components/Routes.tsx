import {Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Login from "./Login";
import Register from "@/components/Register";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={ <Welcome/> } />
                <Route path={'/login'} element={ <Login/> } />
                <Route path={'/register'} element={ <Register/> } />
            </Routes>
        </>
    );
};

export default AppRoutes