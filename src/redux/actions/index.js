export const fetchAlbums = () => {

    return(dispatch) => {
        fetch('http://127.0.0.1:3000/albums')
            .then(response => response.json())
            .then(albums => { console.log(albums)
                dispatch({ type: 'FETCH_ALBUMS', payload: albums})
            })
    }

}