import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // state = {
  //   inputValue: "",
  // };

  state = {
  
        count:0
    
    };

  render() {
    return (
      <div className="App">
        {/* {/* <input
          onChange={(e) => {
            this.setState({ inputValue: e.target.value });
          }}
          style={{ width: "400px", height: "50px", fontSize: "40px" }}
        />
        <h1>{this.state.inputValue}</h1> */}

        <h1>{this.state.count}</h1>
        <button onClick={() => { this.setState({ count: this.state.count + 1})}}>UP</button>
        <button disabled={this.state.count === 0} onClick={() => { this.setState({ count: this.state.count - 1})}}>DOWN</button>
        <button onClick={() => { this.setState({ count:0})}}>RESET</button> 
      </div>
    );
  }
}

export default App;
