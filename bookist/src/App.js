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
      shelf: ''
    
      
    }
    this.addToShelf = this.addToShelf.bind(this)
  }
  
  addToShelf(param){
    
  }

  render(){
   return (
    <div className="App">
      <Header />
      <BookList books={this.state.data} />
      <Shelf />
    </div>
  );
 }
}

export default App;
