import React, { useEffect, useState } from 'react';
import { fetchComics } from '../services/services';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import '../styles/comicList.css';

const ComicList = () => {
    const [comics, setComics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const ts = Date.now();
        const hash = md5(ts + process.env.REACT_APP_MARVEL_PRIVATE_API_KEY + process.env.REACT_APP_MARVEL_API_KEY);
        const fetchData = async () => {
            const comicsData = await fetchComics(ts, hash);
            setComics(comicsData);
        };
        fetchData();
    }, []);

    const handleComicClick = (id) => {
        navigate(`/comics/${id}`);
    };

    return (
        <div>
            <h2>Lista de Cómics</h2>
            <div className="comic-list">
                {comics.map((comic) => (
                    <div 
                        key={comic.id} 
                        className="comic-card" 
                        onClick={() => handleComicClick(comic.id)}
                    >
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                        <h3>{comic.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComicList;
