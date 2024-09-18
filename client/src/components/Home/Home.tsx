import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Bienvenido a Formotex</h1>
            <div style={{ marginTop: '20px' }}>
                <Link to="/login">
                    <button style={{ marginRight: '10px' }}>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>  
    );
};

export default Home;