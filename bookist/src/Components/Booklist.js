import React from 'react'

const BookList = (props) => {  
    const mappedBooks = props.books.map((elem) => <div className="subHeader">
    <h4>{elem.id}</h4>
    <h4>{elem.title}</h4>
    <h4>{elem.author}</h4>
    {/* () => makes this a callback function, so it doesn't keep invoking it over and over. we want it to be invoked but only the onclick. do this when passing a function */}
    <img onClick={() => props.addToShelf(elem.title)} src={elem.img} alt='book cover'></img> 
</div>)

     return(
         <div>
            <h2> List </h2>
            {(mappedBooks)}
         </div>
        
    )
}

export default BookList