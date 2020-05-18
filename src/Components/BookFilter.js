import React from 'react';

export default function BookFilter(props) {
    return (
        <div className="print-filter">
            <label for="bookFilter">Print Type:</label>
            <select id="bookFilter">
                <option id='ebooks'>No Filter</option>
                <option id='paid-ebooks'>Paid E-books</option>
                <option id='free-ebooks'>Free E-Books</option>
            </select>
        </div>
    )
}