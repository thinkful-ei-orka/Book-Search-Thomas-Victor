import React from 'react';

export default function ListItem(props) {
     return (
          <div>
          <h2>
               {props.title}
          </h2>
          <img src={props.url} alt='book-cover'/>
          <div className='author-block'></div>
          <div className='author-price'>
               <p>{props.author}</p>
               <p>{props.price}</p>
          </div>
          <p>{props.description}</p>
          </div>
     )
}