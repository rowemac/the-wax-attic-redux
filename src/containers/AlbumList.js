import { Component } from 'react'
import Album from '../components/Album'
import { connect } from 'react-redux'
import { fetchAlbums } from '../redux/actions/index'

class AlbumList extends Component {
    
    componentDidMount() {
        this.props.fetchAlbums()
    }

    render() {
        const mappedAlbums = this.props.albums.map( (album, i) => { return <Album album={album} key={i} /> })
        
        return(
            <div className="albums-container">
                {mappedAlbums}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { fetchAlbums })(AlbumList)