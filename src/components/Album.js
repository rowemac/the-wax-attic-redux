import React from 'react'

const AlbumItem = (props) => {
    return (
        <div className="album-card">
            <img src={props.image} alt={props.title}/>
        </div>
    )
}

export default Album