import { Component } from 'react'
import { connect } from 'react-redux'
import { editAlbum } from '../redux/actions/index'

class EditAlbumForm extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            title: "",
            artist: "",
            year: "",
            condition: "",
            length: "",
            genre: "",
            label: "",
            single: "",
            image: ""
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.album.id, 
            title: this.props.album.title,
            artist: this.props.album.artist,
            year: this.props.album.year,
            condition: this.props.album.condition,
            length: this.props.album.length,
            genre: this.props.album.genre,
            label: this.props.album.label,
            single: this.props.album.single,
            image: this.props.album.image
        })
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.editAlbum(this.state)
        this.props.history.push('/')
    }

    render() {
        return(
            <div className="edit-form-div">
                <form onSubmit={this.submitHandler}>
                    <input type="text" 
                        name="title" 
                        placeholder="Title" 
                        value={this.state.title} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="artist" 
                        placeholder="Artist" 
                        value={this.state.artist} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="year" 
                        placeholder="Year" 
                        value={this.state.year} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <select
                    name="condition"
                    value={this.state.value} 
                    onChange={this.onChangeHandler}
                    defaultValue={'DEFAULT'}
                    >
                        <option value="DEFAULT" disabled>---Select a Conditon---</option>
                        <option value="New">New</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                    </select>
                    <br></br>
                    <input type="text" 
                        name="length" 
                        placeholder="Length" 
                        value={this.state.length} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="genre" 
                        placeholder="Genre" 
                        value={this.state.genre} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="label" 
                        placeholder="Label" 
                        value={this.state.label} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="single" 
                        placeholder="Single" 
                        value={this.state.single} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="image" 
                        placeholder="Image URL" 
                        value={this.state.image} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <br></br>
                    <input type="submit" value="Save Changes" className="btn"/>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state, albumId) => {
    const id = parseInt(albumId.match.params.id)
    return {
        album: state.albums.find(album => album.id === id)
    }
}
export default connect(mapStateToProps, { editAlbum })(EditAlbumForm)