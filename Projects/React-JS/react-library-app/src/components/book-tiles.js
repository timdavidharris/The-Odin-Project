import React from 'react';
import uniqid from 'uniqid';

const BookCard = (props) => {
    const bookArray = props.bookArray;
    return(
        <div>
            <h3>
                {bookArray.map((item) => {
                    return <p key={uniqid()}>{item}</p>
                })}
            </h3>
        </div>
    )
}

export default BookCard;