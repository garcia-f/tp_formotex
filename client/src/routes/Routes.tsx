import React from 'react';
import { Route, Routes as RouterRoutes, BrowserRouter } from "react-router-dom";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';



const Routes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}  />
            </RouterRoutes>
        </BrowserRouter>
    );
};

// const Routes = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//             </Routes>
//         </Router>
//     );
// };

export default Routes;