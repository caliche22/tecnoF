import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/userLogin.css';

const UserLogin = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log("la respuesta",response)
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('info',response.data.user.id)
            localStorage.setItem('favorites',response.data.user.favorites)
            setIsAuthenticated(true);
            navigate('/');
        } catch (error) {
            console.error('Error en el login:', error);
            alert('Error en el inicio de sesión. Verifica tus credenciales.');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Iniciar Sesión App Marvel</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Iniciar sesión</button>
            </form>

            <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
    );
};

export default UserLogin;
