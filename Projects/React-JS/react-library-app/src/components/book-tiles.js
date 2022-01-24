import React from 'react';

const BookCard = (props) => {
    const libraryArray = props.libraryArray;
    console.log(libraryArray);
    return(
        <div>
            <section>
                {libraryArray.map((book) => {
                    return <div key={book.id}>{`${book.title} by ${book.author} has ${book.pages} pages and this book is ${book.readStatus}.`}</div>
                })}
            </section>
        </div>
    )
}

export default BookCard;