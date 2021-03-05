import React from 'react'

const Booklist = (props) => {  

    const mappedBooks = books.map()
     return(
        <div className="subHeader">
                <h2> List </h2>
                <h4>{mappedBooks.id}</h4>
                <h4>{mappedBooks.title}</h4>
                <h4>{mappedBooks.author}</h4>
                <img src={mappedBooks.img}></img>
        </div>
    )
}

export default Booklist