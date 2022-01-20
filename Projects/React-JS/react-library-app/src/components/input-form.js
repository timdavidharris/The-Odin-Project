import React, { useState } from 'react';
import BookCard from './book-tiles';

class Form extends Component {


    render() {

        return (
            <div id='input-form-div'>
                <BookCard libraryArray={library}/>
                <form onSubmit={this.onSubmitBook}>
                    <label>
                        Book Title
                    <input 
                        name="title_input"
                        type="text"
                        value={}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Author
                    <input
                        name="author_input"
                        type="text"
                        value={}
                        onChange={this.handleChange}
                        required
                    />
                    </label>
                    <label>
                        Number of Pages
                    <input
                        name="pages_input"
                        type="number"
                        value={}
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