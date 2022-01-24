import React, { Component } from 'react';
import BookCard from './book-tiles';
import uniqid from 'uniqid';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            library: [],
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: 'true',
            book: {
                title: '',
                author: '',
                pages: '',
                bookRead: '',
                id: uniqid(),
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            book: {
                title: this.state.bookTitle,
                author: this.state.bookAuthor,
                pages: this.state.bookPages,
                bookRead: this.state.isBookRead,
                id: this.state.book.id,
            },
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            library: this.state.library.concat(this.state.book),
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: 'true',
            book: {
                title: '',
                author: '',
                pages: '',
                bookRead: '',
                id: uniqid(),
            },
        });
    }

    render() {
        const { library } = this.state;
        return (
            <div id='input-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Book Title
                    <input 
                        name="bookTitle"
                        type="text"
                        value={this.state.bookTitle}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="bookAuthor"
                        type="text"
                        value={this.state.bookAuthor}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="bookPages"
                        type="number"
                        value={this.state.bookPages}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                    This book is:
                    <br />
                    <select 
                    name="isBookRead"
                    value={this.state.isBookRead}
                    onChange={this.handleChange}
                    required
                    >
                    <option value="true">read</option>
                    <option value="false">unread</option>
                    </select>
                    </label>
                    <br />
                    <button type='submit' value="Submit">
                        ADD
                    </button>
                </form>
                <BookCard libraryArray={library} />
            </div>
        )
    }
}

export default Form;