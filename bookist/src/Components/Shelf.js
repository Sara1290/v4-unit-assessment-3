import React, { Component } from 'react'

class Shelf extends Component{
    // constructor(){
    //     super()
    // }
   

    render(){
        const mappedTitles = this.props.shelf.map((elem) => <h5>{elem}</h5>)
        return(
            <div className="subHeader">
                <h3> Shelf </h3>
                {(mappedTitles)}
                <button onClick={() => this.props.clearShelf()}>Clear Shelf</button>
            </div>
            ) 
    }
    
}
export default Shelf