import React from 'react'

const Search = (props) => {
    return (
        <input 
            type="text"
            placeholder="Search albums..."
            onChange={(event) => props.callback(event.target.value)}
        />
    )
}



export default Search