import React, { Component } from 'react'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'
import data from './data'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      data,
      shelf: [],
      books: filteredBooks()
    
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }
  
  addToShelf(bookTitle){
    this.setState({shelf: [...this.state.shelf, bookTitle]})
  }

  clearShelf(){
    this.setState({shelf: []})
  }

  filterBooks(input){
   return this.state.books.filter(book => book.toLowerCase().includes(this.state.input.toLowerCase()))                     //SEARCHBAR FUNCTIONALITY PROBLEMS//
   let filteredBooks = []
  }
  
  render(){
    console.log(this.state.shelf)
   return (
    <div className="App">
      <Header />
      <BookList books={this.state.data} addToShelf={this.addToShelf} />
      <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
      <SearchBar SearchBar={this.state.SearchBar} filterBooks={this.filterBooks}/>
    </div>
  );
 }
}

export default App;
