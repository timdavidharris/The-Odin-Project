import React, { Component } from 'react';
import BookCard from './components/book-tiles';
import ToggleBtn from './components/form-toggle-btn';

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
          <BookCard />
          <ToggleBtn />
        </section>
      </div>
    )
  }
}

export default App;