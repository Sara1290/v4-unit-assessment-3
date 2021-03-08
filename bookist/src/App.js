import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'

class App extends Component{
  constructor(){
    super()
    this.state = {
      data,
      shelf: []
    
    }
    this.addToShelf = this.addToShelf.bind(this)
  }
  
  addToShelf(bookTitle){
    this.setState({shelf: [...this.state.shelf, bookTitle]})
  }

  render(){
    console.log(this.state.shelf)
   return (
    <div className="App">
      <Header />
      <BookList books={this.state.data} addToShelf={this.addToShelf} />
      <Shelf shelf={this.state.shelf}/>
    </div>
  );
 }
}

export default App;
