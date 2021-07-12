import React from 'react'

const Album = (props) => {
    return (
        <div className="album-card">
            <img src={props.album.image} alt={props.album.title} />
            <p className="album-artist">{props.album.artist}</p>
            <p className="album-title">{props.album.title}</p>
        </div>
    )
}

export default Album