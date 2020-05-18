import React from 'react';
import PrintFilter from './PrintFilter';
import BookFilter from './BookFilter';

export default function Filter(props) {
     return (
          <div className='Filter-Section'>
               <PrintFilter filterPrint={props.filterPrint}></PrintFilter>
               <BookFilter filterBooks={props.filterBooks}></BookFilter>
          </div>
     )
}
