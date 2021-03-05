import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist'
import Shelf from './Components/Shelf'
import data from './data'
import SearchBar from './Components/SearchBar'

class App extends Component{
  constructor(){
    super()
    this.state = {
      books: data, 
      
    }
  }

  // function filterBooks(input) {
    
  // };
  
  render(){
   return (
    <div className="App">
      <Header />
      <SearchBar />
      <Booklist data={this.state.books}/>
      <Shelf />
    </div>
  );
 }
}

export default App;
