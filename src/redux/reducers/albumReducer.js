// eslint-disable-next-line
export default ( state = [], action ) => {
    switch(action.type) {
        case "FETCH_ALBUMS":
            return [...action.payload]
        case "ADD_ALBUM":
            return [...state, action.payload]
        case "REMOVE_ALBUM":
            let updatedAlbums = state.filter(album => album.id !== action.payload)
            return [...updatedAlbums]
        default:
            return state
    }
}