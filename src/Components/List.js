import React from 'react';
import ListItem from './Components/ListItem';

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
                         url={book.volumeInfo.imagelinks.smallThumbnail}
                         author={book.volumeInfo.authors}
                         price={price}
                         description={book.searchInfo.textSnippet}
                         key={book.id}
                         />
                    )
                    })}
               </div>
          </section>
     )
}