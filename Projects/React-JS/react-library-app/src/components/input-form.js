import React, { Component } from 'react';
import BookCard from './book-tiles';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            book: [],
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
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            book: this.state.book.concat(this.state.bookTitle, this.state.bookAuthor, this.state.bookPages),
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
        });
    }

    render() {
        const { book } = this.state;
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
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="bookAuthor"
                        type="text"
                        value={this.state.bookAuthor}
                        onChange={this.handleChange}
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="bookPages"
                        type="number"
                        value={this.state.bookPages}
                        onChange={this.handleChange}
                    />
                    </label>
                    <button type='submit' value="Submit">
                        ADD
                    </button>
                </form>
                <BookCard bookArray={book} />
            </div>
        )
    }
}

export default Form;