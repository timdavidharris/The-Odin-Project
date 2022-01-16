import React, { Component } from 'react';
import Form from './input-form';

class ToggleBtn extends Component {
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

export default ToggleBtn;