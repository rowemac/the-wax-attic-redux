export const fetchAlbums = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/albums')
            .then(response => response.json())
            .then(albums => { console.log(albums)
                dispatch({ type: 'FETCH_ALBUMS', payload: albums})
            })
    }
}

export const addNewAlbum = (newAlbum) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/albums', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({album: newAlbum})
        })
        .then(response => response.json())
        .then(newAlbum => {
            dispatch({ type: 'ADD_PET', payload: newAlbum })
        })
    }
}

export const removeAlbum = (albumID) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/albums/${albumID}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(album => {
            dispatch({ type: 'REMOVE_ALBUM', payload: album.id })
        })
    }
}