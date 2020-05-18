import React from 'react';

export default function PrintFilter(props) {
    return (
        <div className="print-filter">
            <label htmlFor="typeFilter">Print Type:</label>
            <select id="typerFilter" onChange={ (event) => props.updateFilter('filterPrint', event.target.value)}>
                <option id='all'>All</option>
                <option id='books'>books</option>
                <option id='magazines'>magazines</option>
            </select>
        </div>
    )
}