import { Component } from 'react'
import Album from '../components/Album'

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

    render() {

        const mappedAlbums = this.state.albumAll.map( (album, i) => { return <Album album={album} key={i} /> })

        return(
            <div className="albums-container">
                {mappedAlbums}
            </div>
        )
    }



}

export default AlbumList