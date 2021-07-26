import { Component } from 'react'

class CounterButton extends Component {

    constructor() {
        super()
        this.state = {
            likeInput: "",
            count: 0
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    incrementLikes = (count, likeInput) => {
        
        if(likeInput === "") {
            this.setState({
                count: count
            })
        } else {
            this.setState({
                count: count + parseInt(likeInput)
            })
        }

    }

    render() {
        return(<>
            <input 
                type="text"
                name="likeInput"
                placeholder="Enter number of likes"
                value={this.state.likeInput}
                onChange={this.onChangeHandler}
            />
            <button onClick={ () => {this.incrementLikes(this.state.count, this.state.likeInput)}}> Likes: {this.state.count}</button>
       </>)
    }
}


export default CounterButton