import React from 'react';
import PrintFilter from './PrintFilter';
import BookFilter from './BookFilter';

export default function Filter(props) {
     return (
          <div className='Filter-Section'>
               <PrintFilter getApiFilter={props.searchBooks}></PrintFilter>
               <BookFilter getApiFilter={props.searchBooks}></BookFilter>
          </div>
     )
}
