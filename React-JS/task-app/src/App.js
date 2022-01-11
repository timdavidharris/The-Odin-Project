// Responsible for handling the input field with logic
import React from 'react';
import Overview from "./components/Overview"

let inputArray = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleADD = this.handleADD.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleADD(event) {
    inputArray.push(this.state.value);
    console.log(inputArray);
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
        <Overview array={inputArray}/>
      </div>
    );
  }
}

export default App;
