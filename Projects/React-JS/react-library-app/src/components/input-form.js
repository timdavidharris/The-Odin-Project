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
        };
        this.handleInput = this.handleInput.bind(this);
        this.onSubmitBook = this.onSubmitBook.bind(this);
      }

      handleInput(e) {
          const target = e.target;
          const name = target.name;
          const value = target.value;
          this.setState({
            [name]: value,
          });
      }

    onSubmitBook = (e) => {
        e.preventDefault();
        this.setState({
            library: this.state.library.concat(this.state.book),
            book: {
                title: '',
                author: '',
                pages: '',
                id: uniqid(),
            },
        })
    }

    render() {
        const { book, library} = this.state;

        return (
            <div id='input-form-div'>
                <BookCard libraryArray={library}/>
                <form onSubmit={this.onSubmitBook}>
                    <label>
                        Book Title
                    <input 
                        name="title_input"
                        type="text"
                        value={book.title}
                        onChange={this.handleInput}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="author_input"
                        type="text"
                        value={book.author}
                        onChange={this.handleInput}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="pages_input"
                        type="number"
                        value={book.pages}
                        onChange={this.handleInput}
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