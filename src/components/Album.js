import {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAlbum } from '../redux/actions/index'
import { editAlbum } from '../redux/actions/index'

 class Album extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState({
            count: this.props.likeCount + this.state.count
        })
        
    }

    render() {
    return (
            <div className="album-card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="album-image" src={this.props.album.image} alt={this.props.album.title} />
                        </div>
                        <div className="flip-card-back">
                            <div className="back-text">
                                <p>{this.props.album.year}</p>
                                <p>Condition: {this.props.album.condition}</p>
                                <p>Length: {this.props.album.length}</p>
                                <p>Genre: {this.props.album.genre}</p>
                                <p>Label: {this.props.album.label}</p>
                                <p>Single: "{this.props.album.single}"</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="album-init-info">
                    <p className="album-title">{this.props.album.title}</p>
                    <p className="album-artist">{this.props.album.artist}</p>
                    <NavLink to={`/albums/${this.props.album.id}/edit`}><button className="btn" onClick={()=>editAlbum(this.props.album)}>Edit</button></NavLink>
                    <button className="delete-btn" onClick={ () => removeAlbum(this.props.album.id) }>Delete</button>
                    <button onClick={() => this.clickHandler() }>Likes: {this.state.count} </button>
                </div>
            </div>
        )
}
}
export default connect(null, { removeAlbum, editAlbum })(Album)