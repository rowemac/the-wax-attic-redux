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
            dispatch({ type: 'ADD_ALBUM', payload: newAlbum })
        })
    }
}

export const removeAlbum = (albumId) => {
    return(dispatch) => {  dispatch({ type: 'REMOVE_ALBUM', payload: albumId })
        return fetch(`http://localhost:3000/albums/${albumId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export const editAlbum = (album) => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/albums/${album.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ album: album })
        })
        .then(response => response.json())
        .then(updatedAlbum => {
            dispatch({ type: 'EDIT_ALBUM', payload: updatedAlbum })
        })
    }
}