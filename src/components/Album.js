import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAlbum } from '../redux/actions/index'
import { editAlbum } from '../redux/actions/index'



const Album = ({ album, editAlbum, removeAlbum }) => {
    return (
        <div className="album-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="album-image" src={album.image} alt={album.title} />
                    </div>
                    <div className="flip-card-back">
                        <div className="back-text">
                            <p>{album.year}</p>
                            <p>Condition: {album.condition}</p>
                            <p>Length: {album.length}</p>
                            <p>Genre: {album.genre}</p>
                            <p>Label: {album.label}</p>
                            <p>Single: "{album.single}"</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="album-init-info">
                <p className="album-title">{album.title}</p>
                <p className="album-artist">{album.artist}</p>
                <NavLink to={`/albums/${album.id}/edit`}><button className="btn" onClick={()=>editAlbum(album)}>Edit</button></NavLink>
                <button className="delete-btn" onClick={ () => removeAlbum(album.id) }>Delete</button>
            </div>
        </div>
    )
}

export default connect(null, { removeAlbum, editAlbum })(Album)