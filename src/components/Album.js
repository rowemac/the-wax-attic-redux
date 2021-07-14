import React from 'react'
import { connect } from 'react-redux'
import { removeAlbum } from '../redux/actions/index'

const Album = ({ album, removeAlbum }) => {
    return (
        <div className="album-card">
            <img src={album.image} alt={album.title} />
            <p className="album-artist">{album.artist}</p>
            <p className="album-title">{album.title}</p>
            <button onClick={ () => removeAlbum(album.id) }>Delete Album</button>
        </div>
    )
}
export default connect(null, { removeAlbum })(Album)