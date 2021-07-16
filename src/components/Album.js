import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAlbum } from '../redux/actions/index'
import { editAlbum } from '../redux/actions/index'

const Album = ({ album, removeAlbum, editAlbum }) => {
    return (
        <div className="album-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="album-image" src={album.image} alt={album.title} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Hello!</h1>
                    </div>
                </div>

            </div>

            <p className="album-title">{album.title}</p>
            <p className="album-artist">{album.artist}</p>
            <NavLink to={`/albums/${album.id}/edit`}><button className="btn" onClick={()=>editAlbum(album)}>Edit</button></NavLink>
            <button className="btn" onClick={ () => removeAlbum(album.id) }>Delete</button>
        </div>
    )
}
export default connect(null, { removeAlbum, editAlbum })(Album)