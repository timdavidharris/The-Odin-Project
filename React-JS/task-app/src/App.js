// Responsible for handling the input field with logic
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleADD = this.handleADD.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleADD(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <div className="title-and-input">
      <h1>Task List</h1>
        <form onSubmit={this.handleADD}>
          <label>
            Type in a New Task: 
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="ADD"></input>
        </form>
      </div>
    );
  }
}

export default App;
