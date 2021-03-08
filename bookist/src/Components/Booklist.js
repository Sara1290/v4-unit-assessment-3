import React from 'react'

const BookList = (props) => {  
    const mappedBooks = props.books.map((elem) => <div className="subHeader">
    <h2> List </h2>
    <h4>{elem.id}</h4>
    <h4>{elem.title}</h4>
    <h4>{elem.author}</h4>
    <img src={elem.img} alt='book cover'></img>
</div>)

     return(
         <div>
            {(mappedBooks)}
         </div>
        
    )
}

export default BookList