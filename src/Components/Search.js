import React from 'react';

export default function Search(props) {
     return (
          <form className="search-bar" onSubmit={() => props.searchBooks(this.event)}>
               <input type='text' defaultValue={props.searchTerm} ></input>
               <button type='submit'>Search</button>
          </form>
     )
}