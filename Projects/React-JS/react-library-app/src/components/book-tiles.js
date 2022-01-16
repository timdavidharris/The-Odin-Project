import React from 'react';

const BookCard = (props) => {
    const {libraryArray} = props; 
    return(
        <ul>
            {libraryArray.map((book) => {
                return <li key={book.id}>{book.pages + book.author + book.title}</li>;
            })}
        </ul>
    )

}

export default BookCard;