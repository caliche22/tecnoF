import React, { useEffect, useMemo, useState } from 'react';
import { fetchComicDetails } from '../services/services';
import '../styles/favorites.css';

const Favorites = () => {
    const [comics, setComics] = useState([]);
    const favorites = useMemo(() => {
        const storedFavorites = localStorage.getItem('favorites');
        console.log("favorites", storedFavorites);

        if (storedFavorites && storedFavorites !== 'undefined') {
            return storedFavorites.split(',').map(id => id.trim());
        }
        return [];
    }, []);
    useEffect(() => {
        const fetchFavoritesComics = async () => {
            try {
                const comicsData = await Promise.all(
                    favorites.map(id => fetchComicDetails(id))
                );
                setComics(comicsData.filter(comic => comic));
            } catch (error) {
                console.error("Error fetching favorite comics:", error);
            }
        };
        if (favorites.length > 0) {
            fetchFavoritesComics();
        }
    }, [favorites]);

    console.log("Comics favoritos", comics);
    if (comics.length === 0) {
        return <div>No tienes cómics favoritos aún.</div>;
    }
    return (
        <div className="favorites-container">
            <h2>Tus Cómics Favoritos</h2>
            <ul>
                {comics.map((comic) => (
                    <li key={comic.id}>
                        <h3>{comic.title}</h3>
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
