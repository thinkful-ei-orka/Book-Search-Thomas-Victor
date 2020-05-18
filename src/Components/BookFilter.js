import React from 'react';

export default function BookFilter(props) {
    return (
        <div className="book-filter">
            <label htmlFor="bookFilter">Book Type: </label>
            <select id="bookFilter" onChange={ (event) => props.updateFilter('filterBooks', event.target.value)}>
                <option id='ebooks' value='ebooks'>No Filter</option>
                <option id='paid-ebooks' value='paid-ebooks'>Paid E-books</option>
                <option id='free-ebooks' value='free-ebooks'>Free E-Books</option>
            </select>
        </div>
    )
}