import { Component } from 'react'

class NewAlbumForm extends Component {

    constructor() {
        super()
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
        this.props.newAlbumSubmit(this.state.titleInput)
        this.props.newAlbumSubmit(this.state.artistInput)
        this.props.newAlbumSubmit(this.state.yearInput)
        this.props.newAlbumSubmit(this.state.conditionInput)
        this.props.newAlbumSubmit(this.state.lengthInput)
        this.props.newAlbumSubmit(this.state.genreInput)
        this.props.newAlbumSubmit(this.state.labelInput)
        this.props.newAlbumSubmit(this.state.singleInput)
        this.props.newAlbumSubmit(this.state.imageInput)
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
                    />
                    <input type="text" 
                        name="artistInput" 
                        placeholder="Artist" 
                        value={this.state.artistInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="yearInput" 
                        placeholder="Year" 
                        value={this.state.yearInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="conditionInput" 
                        placeholder="Condition" 
                        value={this.state.conditionInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="lengthInput" 
                        placeholder="Length" 
                        value={this.state.lengthInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="genreInput" 
                        placeholder="Genre" 
                        value={this.state.genreInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="labelInput" 
                        placeholder="Label" 
                        value={this.state.labelInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="singleInput" 
                        placeholder="Single" 
                        value={this.state.singleInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="text" 
                        name="imageInput" 
                        placeholder="Image URL" 
                        value={this.state.imageInput} 
                        onChange={this.onChangeHandler} 
                    />
                    <br></br>
                    <input type="submit" value="Add an Album" />
                </form>
            </div>
        )
    }

}



export default NewAlbumForm