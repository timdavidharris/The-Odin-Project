import React from 'react';

const BookCard = (props) => {
    const libraryArray = props.libraryArray;
    console.log(libraryArray);
    return(
        <div>
            <ul>
                {libraryArray.map((book) => {
                    return <li key={book.id}>{`Title: ${book.title} | Author: ${book.author} | Number of Pages: ${book.pages}`}</li>
                })}
            </ul>
        </div>
    )
}

export default BookCard;