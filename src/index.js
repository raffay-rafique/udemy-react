import React from 'react';
import ReactDom from 'react-dom'
import {data} from './books'
import Book from './Book'

//CSS
import './index.css'

//Setting Up variables


function Booklist() {
  return (
    <section className="booklist">
      
     {data.map((book)=>
     {
       return <div>
        <Book key={book.id} {...book}></Book>
       </div>
      }
      )
     }
    </section>
  )
}



ReactDom.render(<Booklist />, document.getElementById("root"));