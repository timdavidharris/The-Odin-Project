import React from 'react';
// import uniqid from 'uniqid';

const BookCard = (props) => {
    const libraryArray = props.libraryArray;
    const bookObj = props.bookObj;
    console.log(libraryArray);
    console.log(bookObj);
    return(
        <div>
            <h3>
                <p>
                    Hello
                </p>
            </h3>
        </div>
    )
}

export default BookCard;