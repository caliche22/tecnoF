import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/userRegistration.css';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            alert('Usuario registrado con éxito');
            navigate('/login');
        } catch (error) {
            console.error('Error registrando usuario:', error);
            alert('Error al registrar usuario');
        }
    };

    const handleGoBack = () => {
        navigate('/login'); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro de Usuario</h2>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                placeholder="Correo Electrónico" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Registrar</button>
            <button type="button" onClick={handleGoBack} className="back-button">
                Atrás
            </button>
        </form>
    );
};

export default UserRegistration;
