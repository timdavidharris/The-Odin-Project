import React from 'react';

const BookCard = (props) => {
    const { libraryArray } = props;
    function changeReadStatus(e) {
        // e.preventDefault();
        let key = e.target.dataset.key;
        let book = libraryArray.find(theKey);
        function theKey(book) {
            return book.id === key;
        }
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
                    {`${book.title} by ${book.author} has ${book.pages} pages and this book is ${book.bookRead}`} 
                    <br />
                    <label>
                    Change read status to:
                    <select onChange={changeReadStatus} data-key={book.id}>
                        <option value="">--select--</option>
                        <option value={book.bookRead === "read" ? "unread" : "read"}>{book.bookRead === "read" ? "unread" : "read"}</option>
                    </select>
                    </label>
                    </div>
                })}
            </section>
        </div>
    )
}

export default BookCard;