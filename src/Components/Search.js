import React from 'react';

export default function Search(props) {
     return (
          <form>
               <input type='text' value={props.searchTerm} ></input>
               <button type='submit' onSubmit={() => props.getBooksApi(this.event)}></button>
          </form>
     )
}