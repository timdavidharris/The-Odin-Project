import React, { useState } from 'react';
// import BookCard from './book-tiles';
import uniqid from 'uniqid';

const initialValues = {
    book: {
        title: '',
        author: '',
        pages: '',
        id: uniqid()
    },
    library: [],
}

export default function Form() {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    return (
        <div id='input-form-div'>
            {/* <BookCard libraryArray={library}/> */}
            <form>
                <label>
                    Book Title
                <input 
                    name="title_input"
                    type="text"
                    value={values.book.title}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Author
                <input
                    name="author_input"
                    type="text"
                    value={values.book.author}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                    Number of Pages
                <input
                    name="pages_input"
                    type="number"
                    value={values.book.pages}
                    onChange={handleChange}
                    required
                />
                </label>
                <button type='submit' value="Submit">
                    ADD
                </button>
            </form>
        </div>
    )
}
