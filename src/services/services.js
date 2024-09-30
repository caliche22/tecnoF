export const fetchComics = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/comics');
        if (!response.ok) {
            throw new Error('Error al obtener los cómics');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comics:', error);
        return [];
    }
};

export const fetchComicDetails = async (comicId) => {
    try {
        const response = await fetch(`http://localhost:5000/api/comics/${comicId}`);
        if (!response.ok) {
            throw new Error('Error al obtener los detalles del cómic');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comic details:', error);
        return null;
    }
};

export const addFavoriteComic = async (userId, comic) => {
    console.log("elid ",userId)
    console.log("el comcis",comic)
    try {
        const response = await fetch('http://localhost:5000/api/comics/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, comic }),
        });
        if (!response.ok) {
            throw new Error('Error al agregar cómic a favoritos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding favorite comic:', error);
        return null;
    }
};
