import React, { useMemo } from 'react';
import '../styles/favorites.css';

const Favorites = () => {
    const favorites = useMemo(() => {
        const storedFavorites = localStorage.getItem('favorites');
        console.log("favorites",storedFavorites)
        return storedFavorites && storedFavorites !== 'undefined' ? JSON.parse(storedFavorites) : [];
    }, []);

    console.log("los favoritos array", favorites);
    
    if (favorites.length === 0) {
        return <div>No tienes cómics favoritos aún.</div>;
    }

    return (
        <div className="favorites-container">
            <h2>Tus Cómics Favoritos</h2>
            <ul>
                {favorites.map((comicId) => (
                    <li key={comicId}>{comicId}</li> 
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
