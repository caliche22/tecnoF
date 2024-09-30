import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const handleLogout = () => {
        console.log('Usuario cerrado sesión');
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/comics" className="nav-link">Cómics</Link>
            <Link to="/favorites" className="nav-link">Favoritos</Link>
            <Link className="nav-link logout-button" onClick={handleLogout}>Cerrar Sesión</Link>
        </nav>
    );
};

export default Navbar;
