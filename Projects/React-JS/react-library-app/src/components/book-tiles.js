import React from 'react';

const BookCard = (props) => {
    const {libraryArray} = props;
    return(
        <ul>
            {libraryArray.map((book) => {
                return <li key={book.id}>{book}</li>;
            })}
        </ul>
    )

}

export default BookCard;