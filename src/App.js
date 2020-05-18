import React from 'react';
import './App.css';
import Filter from './Components/Filter';
import Search from './Components/Search';
import List from './Components/List';

export default class App extends React.Component {
  state = {
    books: [],
    searchTerm: '',
    filterBooks: 'ebooks',
    filterPrint: 'all',
    loading: false
  }

  //0.searchInfo.textSnippet <-- search description
  //0.volumeInfo.authors <-- Author
  //0.volumeInfo.imagelinks.smallThumbnail <-- Image
  //0.volumeInfo.title <-- Book title
  //0.saleInfo.saleability <-- Is it for sale? "NOT_FOR_SALE" - No sale, "FOR_SALE" is for sale
  //0.saleInfo.listPrice.amount <-- cost of book
  //0.saleInfo.listPrice.currencyCode <-- Type of currency, just assume USD for now
  updateSearch = (string) => {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${this.state.bookFilter}&printType=${this.state.printFilter}`;
    //get search string
    //get filters here
    //add to url
    //fetch
  };

  updateBookFilter = (string) => {

  }

  updatePrintFilter = (string) => {

  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=HenryVII';
    fetch (url)
    .then (res => {
      if (!res.ok) {
        throw new Error('aaarrgh');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Google Book Search
        </header>
        <Search searchTerm={this.state.searchTerm} searchBooks={this.updateSearch} />
        <Filter filterBooks={this.updateBookFilter} filterPrint={this.updatePrintFilter}/>
        <List bookList={this.state.books} />
      </div>
    );
  }
  
}