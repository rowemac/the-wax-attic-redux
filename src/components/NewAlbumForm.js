import { Component } from 'react'
import { connect } from 'react-redux'
import { addNewAlbum } from '../redux/actions/index'

class NewAlbumForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addNewAlbum(this.state)
        // this.props.history.push('/albums')
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="new-form-div">
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
                    <input type="text" 
                        name="condition" 
                        placeholder="Condition" 
                        value={this.state.condition} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
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
                    <input type="submit" value="Add an Album" className="btn"/>
                </form>
            </div>
        )
    }
}
export default connect(null, { addNewAlbum })(NewAlbumForm)