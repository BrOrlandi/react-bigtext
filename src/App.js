import React, { Component } from 'react';
import './App.css';
import BigText from './react-bigtext';
import Docs from './Docs'

import ReactHtmlParser from 'react-html-parser';

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      children:'<i class="fa fa-rebel"></i> Big Text Component <i class="fa fa-empire"></i>',
      options: `{
  "delay":500,
  "height" : 300,
  "width": 800,

  "fontSizeFactor": 0.8,
  "//maximumFontSize": 50,
  "rotateText": 10,
  "limitingDimension": "both",
  "horizontalAlign": "center",
  "verticalAlign": "center",
  "textAlign":"center",
  "whiteSpace": "nowrap"
}`
    }
  }

  handleChangeChildren = (event)=>{
    this.setState({children: event.target.value});
  }

  handleChangeOptions = (event)=>{
    this.setState({options: event.target.value});
  }

  render() {
    let options = {};
    try {
      options = JSON.parse(this.state.options);
    } catch (error) {
      
    }
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <BigText options={{height: 50}}>BigText React Component</BigText>
          <a href="https://github.com/BrOrlandi/react-bigtext" className="github"><i className="fa fa-github" style={{fontSize: '50px', float: 'right', marginTop: '-50px'}}></i></a>
        </div>
        <div className="App-content">
          <div className="App-inner">
            <label htmlFor="content">Children Content:</label>
            <br/>
            <textarea name="content" id="content" ref="content" cols="50" rows="10" value={this.state.children} onChange={this.handleChangeChildren}></textarea>
            <br/>
            <label htmlFor="options">BigText options:</label>
            <br/>
            <textarea name="options" id="options" ref="options" cols="50" rows="15" value={this.state.options} onChange={this.handleChangeOptions}>
            </textarea>
            <br/>
            <br/>
            <BigText className="textTest" options={options}>
              {ReactHtmlParser(this.state.children)}
            </BigText>
          </div>
        </div>
        <hr/>
      </div>
        <Docs/>
      </div>
    );
  }
}

export default App;
