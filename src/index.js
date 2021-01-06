import React from 'react';
import ReactDom from 'react-dom'

//CSS
import './index.css'

function Booklist() {
  return (
    <section className="booklist">
     <Book></Book>
    </section>
  )
}

const Book=()=>{
  const title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
  const author="James Clear"
  const image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX184_.jpg'
  return <article className="book">
   <img src={image} alt=""></img>

  <h1>{title}</h1>

  <h4 style={{color:"#617d98",fontSize:"0.75rem",marginTop:".25rem"}}>{author}</h4>
  </article>
}


ReactDom.render(<Booklist />, document.getElementById("root"));