import React from 'react';
import Proptypes from 'prop-types';

class App extends React.Component{
  state={
    count:0
  }
  add = () => {
    console.log("add");
    this.setState(current => ({count:this.state.count+1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count:this.state.count-1}));
  };
  bresult = () => {
    console.log("curren state = "+this.state.count);
  };
  //마운트 해제_1.
  componentDidUnmount(){
    console.log("componentDidUnmount is started!");
  }
  //업데이트_2.
  componentDidUpdate(){
    console.log("componentDidUpdate is started!");
  }
  //마운트_3. 
  componentDidMount(){
    console.log("ComponentDidMount is started!");
  }
  //마운트_1.
  constructor(prop){
      super(prop);
      console.log("Constructor is started!");
  }
  //마운트_1., 업데이트_1.
  render(){
    
    console.log("Render is started!");
    return (<div>
      <h1>This is a number : {this.state.count}</h1>
      <button onClick={this.add}>+</button>
      <button onClick={this.minus}>-</button>
      <button onClick={this.bresult}>=</button>
    </div>
    );
  }
}

export default App;

/* //원래 creat하면 나오는 app.js 내용
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
