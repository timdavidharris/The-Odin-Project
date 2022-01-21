import React, { Component } from 'react';
import BookCard from './book-tiles';
import uniqid from 'uniqid';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: '',
                author: '',
                pages: '',
                id: uniqid(),
            },
            library: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        this.setState({
            library: this.state.library.concat(this.state.book),
            book: {
                title: '',
                author: '',
                pages: '',
                id: uniqid(),
            }
        });
        e.preventDefault();
    }

    render() {
        const {library} = this.state;
        return (
            <div id='input-form-div'>
                <BookCard libraryArray={library}/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Book Title
                    <input 
                        name="book.title"
                        type="text"
                        value={this.title}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="book.author"
                        type="text"
                        value={this.author}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="book.pages"
                        type="number"
                        value={this.pages}
                        onChange={this.handleChange}
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
}

export default Form;