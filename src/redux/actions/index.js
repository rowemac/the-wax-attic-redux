export const fetchAlbums = () => {

    return(dispatch) => {
        fetch('http://localhost3000/albums')
            .then(response => response.json())
            .then(albums => {
                dispatch({ type: 'FETCH_ALBUMS', payload: albums})
            })
    }

}