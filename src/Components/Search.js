import React from 'react';
import BookFilter from './BookFilter';
import PrintFilter from './PrintFilter';

export default class Search extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               searchTerm: 'henry',
               filterBooks: 'ebooks',
               filterPrint: 'all',   
          }
     }
    

     updateFilter = (key, prop) => {
          console.log(key, prop);
          this.setState({
               [key]: prop
          })
     }

     render() {
          return (
               <form className="search-bar" onSubmit={(event) => this.props.searchBooks(event, this.state)}>
                    <input type='text' defaultValue={this.props.searchTerm}></input>
                    <button type='submit'>Search</button>
                    <PrintFilter updateFilter={this.updateFilter}></PrintFilter>
                    <BookFilter updateFilter={this.updateFilter}></BookFilter>
               </form>
          )
     }

}