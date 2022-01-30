import React from 'react';
import BookCard from './book-card';
import uniqid from 'uniqid';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            library: [],
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: '',
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
        this.removeBook = this.removeBook.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

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

    removeBook = (e) => {
        let bookByID = e.target.dataset.key
        this.setState({
            library: this.state.library.filter(book => book.id !== bookByID),
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            library: this.state.library.concat(this.state.book),
            bookTitle: '',
            bookAuthor: '',
            bookPages: '',
            isBookRead: '',
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
                        This book is:
                        <br />
                        <select 
                            name="isBookRead"
                            value={this.state.isBookRead}
                            onChange={this.handleChange}
                            required
                        >
                        <option value="">--select one--</option>
                        <option value={"read"}>read</option>
                        <option value={"unread"}>unread</option>
                        </select>
                    </label>
                    <br />
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
                    <input type="submit" value="ADD"/>
                </form>
                <div id='book-parent-div'>
                {library.map((book) => {
                    return <BookCard key={book.id} book={book} removeBook={this.removeBook}/>;
                })}
                </div>
            </div>
        )
    }
}

export default Form;