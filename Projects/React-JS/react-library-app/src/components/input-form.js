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

    render() {
        const { book, library} = this.state;

        return (
            <div id='input-form-div'>
                <BookCard libraryArray={library}/>
                <form onSubmit={this.onSubmitBook}>
                    <label>
                        Book Title
                    </label>
                    <input 
                        onChange={this.handleTitle}
                        value={book.title}
                    />
                    <label>
                        Author
                    </label>
                    <input
                        onChange={this.handleAuthor}
                        value={book.author}
                    />
                    <label>
                        Number of Pages
                    </label>
                    <input
                        onChange={this.handlePages}
                        value={book.pages}
                    />
                    <button type='submit'>
                        ADD
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;