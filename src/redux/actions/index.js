export const fetchAlbums = () => {
    return(dispatch) => {
        return fetch('http://127.0.0.1:3000/albums')
            .then(response => response.json())
            .then(albums => { console.log(albums)
                dispatch({ type: 'FETCH_ALBUMS', payload: albums})
            })
    }

}

export const addNewAlbum = (newAlbum) => {
    return{
        type: "ADD_ALBUM",
        payload: newAlbum
    }
}

export const removeAlbum = () => {
    return {
        type: "REMOVE_ALBUM"
    }
}