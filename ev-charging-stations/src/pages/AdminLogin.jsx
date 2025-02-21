import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdminLogin = ({setAuth}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post('http://localhost:3005/api/auth/login', {
                username,
                password,
            });

            // If successful, set the token and authenticate the user
            const { token } = response.data;
            localStorage.setItem('authToken', token); // Store JWT token in localStorage

            setIsAuthenticated(true);
            
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Invalid credentials');
            console.log(error);

            setIsAuthenticated(false);
        }
    };
    const navigate = useNavigate();
    const handleaddport = () => {
        setAuth(true)
        navigate('/add')
        
    }


    return (
        <div>
            <h2>Admin Login</h2>
            {isAuthenticated ? (
                <><h3>Welcome Admin!</h3><button onClick={handleaddport}>Add PORTS</button></>
            ) : (
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default AdminLogin;
