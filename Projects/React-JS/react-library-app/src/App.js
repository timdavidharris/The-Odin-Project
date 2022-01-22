import React, { Component } from 'react';
import Form from './components/input-form';

class App extends Component {
  render() {
    return(
      <div>
        <h1>
          Library
        </h1>
        <h2>
          Books in Your Library
        </h2>
        <section id='book-cards'>
          <Form />
        </section>
      </div>
    )
  }
}

export default App;