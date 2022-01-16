import React, { Component } from 'react';
import BookCard from './book-tiles';
import uniqid from 'uniqid';

class Form extends Component {
    constructor() {
        super();
    
        this.state = {
          book: { 
            title: '',
            author: '',
            pages: '',
            id: uniqid(),
          },
          library: []
        };
        this.handleTitle.bind(this);
        this.handleAuthor.bind(this);
        this.handlePages.bind(this);
        this.onSubmitBook.bind(this);
      }

      handleTitle = (e) => {
          this.setState({
              book: {
                  title: e.target.value,
              }
          })
      }

      handleAuthor = (e) => {
        this.setState({
            book: {
                author: e.target.value,
            }
        })
    }

    handlePages = (e) => {
        this.setState({
            book: {
                pages: e.target.value,
                id: this.state.book.id,
            }
        })
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
                        onChange={this.handleTitle}
                        value={book.title}
                        type="text"
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        onChange={this.handleAuthor}
                        value={book.author}
                        type="text"
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        onChange={this.handlePages}
                        value={book.pages}
                        type="number"
                        required
                    />
                    </label>
                    <button type='submit'>
                        ADD
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;