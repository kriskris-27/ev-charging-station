import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './AdminLogin.css';

const AdminLogin = ({setAuth}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://starlietti-evps.onrender.com/api/auth/login', {
                username,
                password,
            });

            const { token } = response.data;
            localStorage.setItem('authToken', token);
            setIsAuthenticated(true);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Invalid credentials');
            console.log(error);
            setIsAuthenticated(false);
        }
    };

    const handleaddport = () => {
        setAuth(true);
        navigate('/add');
    };

    return (
        <div className="admin-login-container">
            <div className="back-button" onClick={() => navigate('/')}>
                <FaArrowLeft />
            </div>
            <div className="welcome-message">Welcome Kris and Admins</div>
            <div className="login-form">
                <h2>Admin Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                {isAuthenticated && (
                    <button onClick={handleaddport} className="add-port-button">
                        Add Charging Port
                    </button>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;
