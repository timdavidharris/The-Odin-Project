import React, { Component } from 'react';
import uniqid from 'uniqid';

class Form extends Component {
    constructor() {
        super();
    
        this.state = {
          book: { 
            title: '',
            author: '',
            pageNum: '',
            id: uniqid(),
          },
          library: []
        };
      }

    render() {
        return (
    <div id='input-form-div'>
        <form>
            <label>
                Book Title
            </label>
            <input></input>
            <label>
                Author
            </label>
            <input></input>
            <label>
                Number of Pages
            </label>
            <input></input>
            <button type='submit'>
                ADD
            </button>
        </form>
    </div>
        )
    }
}

export default Form;