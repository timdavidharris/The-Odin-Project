import React from 'react';

const BookCard = (props) => {
    const libraryArray = props.libraryArray;
    console.log(libraryArray);
    return(
        <div>
            <section>
                {libraryArray.map((book) => {
                    return <div key={book.id}>{`Title: ${book.title} | Author: ${book.author} | Number of Pages: ${book.pages}`}</div>
                })}
            </section>
        </div>
    )
}

export default BookCard;