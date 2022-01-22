import React from 'react';

const BookCard = (props) => {
    props.libraryArray.concat(props.bookArray);
    console.log(props.libraryArray);
    console.log(props.bookArray);
    return(
        <div>
            <p>
                Hello
            </p>
        </div>
        // <ul>
        //     {libraryArray.map((book) => {
        //         return <li key={book.id}>{book}</li>;
        //     })}
        // </ul>
    )
}

export default BookCard;