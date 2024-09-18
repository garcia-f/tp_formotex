import React from 'react';
import { Route, Routes as RouterRoutes, BrowserRouter } from "react-router-dom";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home'; 



const Routes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}  />
            </RouterRoutes>
        </BrowserRouter>
    );
};


export default Routes;