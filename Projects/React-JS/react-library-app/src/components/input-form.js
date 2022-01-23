import React, { Component } from 'react';
import BookCard from './book-tiles';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: '',
                author: '',
                pages: '',
            },
            library: [],
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
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
            book: {
                title: '',
                author: '',
                pages: '',
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
                <BookCard libraryArray={library} />
            </div>
        )
    }
}

export default Form;