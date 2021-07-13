export default ( state = [], action ) => {

    switch(action.type) {
        case "FETCH_ALBUMS":
            return [...action.payload]
        case "ADD_ALBUM":
            return [...state, action.payload]
        default:
            return state
    }

}