import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
    <div>
        <form id='input-form-div'>
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