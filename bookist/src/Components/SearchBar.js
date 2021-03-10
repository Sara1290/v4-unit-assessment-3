import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(){
        super()

        this.state = {
            userInput: '',
        }
    }


    render(){
        return(
            <div>
                <input>Type Here!</input>
                <button onClick={() => this.props.filterBooks()}>Search</button>
                <button>Clear Search</button>
            </div>
        )
    }
}

export default SearchBar;