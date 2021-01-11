import React from 'react'

const Book=(props)=>{
    const{img,title,author}=props;
    // attribute, eventHandler
    const ClickHandler=()=>{
      alert('hello world');
    }
    const complexExample=(author)=>{
    alert(author)
    }
      return( 
      <article className="book">
       <img src={img} alt=""></img>
    
        <h1>{title}</h1>
    
        <h4>{author}</h4>
        <button type="button" onClick={ClickHandler}>Buy Now</button>
        <button type="button" onClick={()=>complexExample(author)}>more complex example</button>
      </article>
      )}
    

export default Book
