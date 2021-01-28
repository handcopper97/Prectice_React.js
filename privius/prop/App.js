import React from 'react';

function Food({fav}){
  return(
    <h3>I like {fav}</h3>
  );
}

function App() {
    return (
      <div>
        <h1>TEST</h1>
        <Food fav="kimchi"/>
        <Food fav="Gimdark"/>
        <Food fav="Korean bond soup"/>
        <Food fav="Susi"/>

      </div>
      );
    
}

export default App;

/*
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
