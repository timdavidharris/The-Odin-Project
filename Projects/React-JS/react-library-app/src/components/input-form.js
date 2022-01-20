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

      handleInput(e) {
          const target = e.target;
          const value = target.value;
          const name = target.name;

          this.setState({
            [name]: value
          });
      }

    //   handleAuthor = (e) => {
    //     this.setState({
    //         book: {
    //             author: e.target.value,
    //         }
    //     })
    // }

    // handlePages = (e) => {
    //     this.setState({
    //         book: {
    //             pages: e.target.value,
    //             id: this.state.book.id,
    //         }
    //     })
    // }

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
                        name="title"
                        onChange={this.handleInput}
                        value={book.title}
                        type="text"
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="author"
                        onChange={this.handleInput}
                        value={book.author}
                        type="text"
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="pages"
                        onChange={this.handleInput}
                        value={book.pages}
                        type="number"
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