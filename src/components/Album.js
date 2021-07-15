import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAlbum } from '../redux/actions/index'
import { editAlbum } from '../redux/actions/index'

const Album = ({ album, removeAlbum, editAlbum }) => {
    return (
        <div className="album-card">
            <img src={album.image} alt={album.title} />
            <p className="album-title">{album.title}</p>
            <p className="album-artist">{album.artist}</p>
            <NavLink to={`/albums/${album.id}/edit`}><button onClick={()=>editAlbum(album)}>Edit</button></NavLink>
            <button onClick={ () => removeAlbum(album.id) }>Delete</button>
        </div>
    )
}
export default connect(null, { removeAlbum, editAlbum })(Album)