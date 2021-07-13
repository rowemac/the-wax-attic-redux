import { Component } from 'react'

class NewAlbumForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleInput: "",
            artistInput: "",
            yearInput: "",
            conditionInput: "",
            lengthInput: "",
            genreInput: "",
            labelInput: "",
            singleInput: "",
            imageInput: ""
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.newAlbumProp(this.state.titleInput)
        // this.props.newAlbumProp(this.state.artistInput)
        // this.props.newAlbumProp(this.state.yearInput)
        // this.props.newAlbumProp(this.state.conditionInput)
        // this.props.newAlbumProp(this.state.lengthInput)
        // this.props.newAlbumProp(this.state.genreInput)
        // this.props.newAlbumProp(this.state.labelInput)
        // this.props.newAlbumProp(this.state.singleInput)
        // this.props.newAlbumProp(this.state.imageInput)
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
                        name="titleInput" 
                        placeholder="Title" 
                        value={this.state.titleInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="artistInput" 
                        placeholder="Artist" 
                        value={this.state.artistInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="yearInput" 
                        placeholder="Year" 
                        value={this.state.yearInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="conditionInput" 
                        placeholder="Condition" 
                        value={this.state.conditionInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="lengthInput" 
                        placeholder="Length" 
                        value={this.state.lengthInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="genreInput" 
                        placeholder="Genre" 
                        value={this.state.genreInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="labelInput" 
                        placeholder="Label" 
                        value={this.state.labelInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="singleInput" 
                        placeholder="Single" 
                        value={this.state.singleInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="imageInput" 
                        placeholder="Image URL" 
                        value={this.state.imageInput} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <br></br>
                    <input type="submit" value="Add an Album" />
                </form>
            </div>
        )
    }

}



export default NewAlbumForm