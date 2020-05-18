import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
     return (
          <section className='List'>
               <div className='List-Items'>
                    {props.bookList.map((book)=> {
                    let price = "Free";
                    if(book.saleInfo.saleability === "FOR_SALE") {
                         price = `$${book.saleInfo.listPrice.amount}`;
                    }
                    
                    return (
                         <ListItem 
                         title={book.volumeInfo.title}
                         url={book.volumeInfo.imageLinks.thumbnail}
                         author={book.volumeInfo.authors}
                         price={price}
                         description={book.volumeInfo.description}
                         key={book.id}
                         />
                    )
                    })}
               </div>
          </section>
     )
}