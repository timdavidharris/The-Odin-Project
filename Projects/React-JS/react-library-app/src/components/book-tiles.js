import React from 'react';

const BookCard = (props) => {
    const { libraryArray } = props;
    function changeReadStatus(e) {
        console.log("ChangeReadStatus")
        let key = e.target.dataset.key
        function theKey(book) {
            return book.id === key;
        }
        let book = libraryArray.find(theKey);
        if (book.bookRead === "read") {
            book.bookRead = "unread";
        } else {
            book.bookRead = "read"
        }
    }
    return(
        <div>
            <section>
                {libraryArray.map((book) => {
                    return <div key={book.id}>
                    {`${book.title} by ${book.author} has ${book.pages} pages and this book is ${book.bookRead}.`} 
                    <button data-key={book.id} onClick={changeReadStatus}>Change Read Status</button>
                    </div>
                })}
            </section>
        </div>
    )
}

export default BookCard;