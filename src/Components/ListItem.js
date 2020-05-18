import React from 'react';

export default function ListItem(props) {
     return (
          <div className="list-item">
               <h2>{props.title}</h2>
               <div className='author-block'>
                    <img src={props.url} alt='book-cover' />
                    <div className='author-text'>
                         <div className='author-price'>
                              <p>{props.author}</p>
                              <p>{props.price}</p>
                         </div>
                         <p>{props.description}</p>
                    </div>
               </div>
          </div>
     )
}