import React from 'react';

export default function PrintFilter(props) {
    return (
        <div className="print-filter">
            <label for="typeFilter">Print Type:</label>
            <select id="typerFilter">
                <option id='all'>All</option>
                <option id='books'>books</option>
                <option id='magazines'>magazines</option>
            </select>
        </div>
    )
}