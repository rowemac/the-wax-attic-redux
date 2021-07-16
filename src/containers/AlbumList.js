import { Component } from 'react'
import Album from '../components/Album'
import { connect } from 'react-redux'
import { fetchAlbums } from '../redux/actions/index'
import Search from '../components/Search'

class AlbumList extends Component {
    
    componentDidMount() {
        this.props.fetchAlbums()
    }

    callback = (term) => {
        this.setState({
            term: term 
        })
    }

    filterIt = (searchTerm) => {
        let filteredAlbums = this.props.albums.filter(album => album.title.toLowerCase().includes(searchTerm) || album.artist.toLowerCase().includes(searchTerm))
        return (filteredAlbums.map( (album, i) => { return <Album album={album} key={i} /> }))
        // return filteredAlbums
    } 


    render() {
        const mappedAlbums = this.props.albums.map( (album, i) => { return <Album album={album} key={i} /> })
        
        return(<>
            <Search />
            <div className="albums-container">
                {mappedAlbums}
                {/* {this.filterIt()} */}
            </div>
        </>)
    }

}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { fetchAlbums })(AlbumList)