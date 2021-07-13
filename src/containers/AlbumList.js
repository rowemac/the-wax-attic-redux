import { Component } from 'react'
import Album from '../components/Album'
import NewAlbumForm from '../components/NewAlbumForm';

class AlbumList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            albumAll: []
        }
    }

    componentDidMount() {
        this.setState({
            albumAll: this.props.aL
        })
    }

    submitHandlerNewAlbum = (newAlbum) => {
        this.setState({
            albumAll: [...this.state.albumAll, newAlbum]
        })
    }

    render() {
        const mappedAlbums = this.state.albumAll.map( (album, i) => { return <Album album={album} key={i} submitData={this.submitHandlerNewAlbum} /> })
        
        return(<>
            <div className="albums-container">
                {mappedAlbums}
            </div>
            <h4>Add an Album</h4>
            <div><NewAlbumForm newAlbumProp={this.submitHandlerNewAlbum} /></div>
        </>)
    }
}

export default AlbumList