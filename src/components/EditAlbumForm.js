import { Component } from 'react'
import { connect } from 'react-redux'
import { editAlbum } from '../redux/actions/index'

class EditAlbumForm extends Component {
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
}
//this.props.title???

export default connect(mapStateToProps, { editAlbum })(EditAlbumForm)