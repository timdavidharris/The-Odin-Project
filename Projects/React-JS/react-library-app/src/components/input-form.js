import { render } from '@testing-library/react';
import React, { Component } from 'react';

class InputForm extends Component {
constructor () {
    super()
        this.state = {
            isHidden: true
        }
        this.toggleHidden.bind(this)
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render () {
        return (
            <div>
            <button onClick={this.toggleHidden} >
                Click to Add a Book
            </button>
            {!this.state.isHidden && <Form />}
            </div>
        )
    }
}

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

export default InputForm;