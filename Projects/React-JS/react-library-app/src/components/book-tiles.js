import React from 'react';
import uniqid from 'uniqid';

const BookCard = (props) => {
    const libraryArray = props.libraryArray;
    console.log(libraryArray);
    return(
        <div>
            <ul>
                {libraryArray.map((book) => {
                    return <li key={uniqid()}>{`${book.title} ${book.author} ${book.pages}`}</li>
                })}
            </ul>
        </div>
    )
}

export default BookCard;