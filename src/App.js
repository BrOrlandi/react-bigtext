import React, { Component } from 'react';
import './App.css';
import BigText from 'big-text.js';

class App extends Component {

  componentDidMount() {
    console.log(BigText);
    BigText(this.refs.test,{
      limitingDimension: "width"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>BigText React Component</h1>
        </div>
        <div className="App-content">
          <div className="App-inner">
            <div className="textTest">
              <span ref="test">Big Text Component</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
