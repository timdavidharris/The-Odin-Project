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
        this.handleTitle = this.handleTitle.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handlePages = this.handlePages.bind(this);
        this.onSubmitBook = this.onSubmitBook.bind(this);
      }

      handleTitle = (e) => {
          this.setState({
            book: {
                title: e.target.value,
                id: this.state.book.id,
            }
          });
      }

      handleAuthor = (e) => {
        this.setState({
          book: {
              author: e.target.value,
          }
        });
    }

    handlePages = (e) => {
        this.setState({
          book: {
              pages: e.target.value,
          }
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
                        onChange={this.handleTitle}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="author_input"
                        type="text"
                        value={book.author}
                        onChange={this.handleAuthor}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="pages_input"
                        type="number"
                        value={book.pages}
                        onChange={this.handlePages}
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