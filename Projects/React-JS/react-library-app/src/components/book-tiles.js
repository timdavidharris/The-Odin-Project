import React from 'react';

const BookCard = (props) => {
    const { libraryArray } = props;
    function changeReadStatus(e) {
        let key = e.target.dataset.key
        function theKey(book) {
            return book.id === key;
        }
        let book = libraryArray.find(theKey);
        if (book.bookRead === "true") {
            book.bookRead = "false";
        } else {
            book.bookRead = "true"
        }
    }
    return(
        <div>
            <section>
                {libraryArray.map((book) => {
                    return <div key={book.id}>{`${book.title} by ${book.author} has ${book.pages} pages and this book is ${book.bookRead === "true" ? "read" : "unread"}.`} <button data-key={book.id} onClick={changeReadStatus}>Change Read Status</button></div>
                })}
            </section>
        </div>
    )
}



export default BookCard;