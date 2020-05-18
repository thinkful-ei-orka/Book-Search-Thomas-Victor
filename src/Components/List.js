import React from 'react';
import ListItem from './Components/ListItem';

export default function List(props) {
     return (
          <section className='List'>
               <div className='List-Items'>
                    {props.items.map((item)=>(
                         <ListItem 
                         title={item.title}
                         url={item.url}
                         author={item.author}
                         price={item.price}
                         description={item.description}
                         key={item.id}
                         />
                    )
                    )}
               </div>
          </section>
     )
}