import React, { Component } from 'react';
import BookCard from './components/book-tiles';
import InputForm from './components/input-form';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
      },
      tasks: [] 
    };
  }

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
          <BookCard />
          <InputForm />
        </section>
      </div>
    )
  }
}

export default App;