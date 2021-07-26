import { Component } from 'react'
import Album from '../components/Album'
import { connect } from 'react-redux'
import { fetchAlbums } from '../redux/actions/index'
import Search from '../components/Search'
import Header from '../components/Header'

class AlbumList extends Component {

    constructor() {
        super()
        this.state = {
            term: ""
        }
    }

    componentDidMount() {
        this.props.fetchAlbums()
    }

    searchAlbums = (term) => {
        this.setState({
            term: term 
        })
    }

    filterAlbums = () => {
        let lowerStateTerm = this.state.term.toLowerCase()
        let filteredAlbums = this.props.albums.filter(album => 
            album.title.toLowerCase().includes(lowerStateTerm) || 
            album.artist.toLowerCase().includes(lowerStateTerm))
        return (filteredAlbums.map( (album, i) => { return <Album album={album} key={i} /> }))
    } 


    render() { 
        return(<>
            <br></br><br></br>
            <Header />
            <Search searchTermProp={this.state.term} search={this.searchAlbums}/>
            <div className="albums-container">
                {this.filterAlbums()}
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