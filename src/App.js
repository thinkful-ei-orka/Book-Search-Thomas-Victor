import React from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';

export default class App extends React.Component {
  state = {
    books: [],
    searchTerm: 'henry',
    filterBooks: 'ebooks',
    filterPrint: 'all',
    loading: false,
    error: '',
  }

  //0.searchInfo.textSnippet <-- search description
  //0.volumeInfo.authors <-- Author
  //0.volumeInfo.imagelinks.smallThumbnail <-- Image
  //0.volumeInfo.title <-- Book title
  //0.saleInfo.saleability <-- Is it for sale? "NOT_FOR_SALE" - No sale, "FOR_SALE" is for sale
  //0.saleInfo.listPrice.amount <-- cost of book
  //0.saleInfo.listPrice.currencyCode <-- Type of currency, just assume USD for now
  updateSearch = (event, filters) => {
    event.preventDefault();
    console.log(filters);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${filters.searchTerm}&filter=${filters.filterBooks}&printType=${filters.filterPrint}`;
    fetch(url)
    .then (res => {
      if (!res.ok) {
        throw new Error('aaarrgh');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        books: data.items
      })
      console.log(this.state.books);
      console.log(data);
    })
    .catch((Error) => {
    this.setState({
      error: Error.message
    })
  })
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Google Book Search</h1>
          <h2>{this.state.error}</h2> 
        </header>
        <Search searchTerm={this.state.searchTerm} searchBooks={this.updateSearch} />
        <List bookList={this.state.books} />
      </div>
    );
  }
  
}