import React, { Component } from 'react';
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
      <body>
        <h1>
          Library
        </h1>
        <h2>
          Books in Your Library
        </h2>
        <section id='book-cards'>

        </section>
      </body>
    )
  }
}

export default App;