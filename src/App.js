import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserRegistration from './components/userRegistration';
import UserLogin from './components/userLogin';
import ComicList from './components/comicList';
import ComicDetail from './components/comicDetail';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<UserLogin setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/register" element={<UserRegistration />} />
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<ComicList />} />
                        <Route path="/comics/:id" element={<ComicDetail />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>
        </Router>
    );
};

export default App;
