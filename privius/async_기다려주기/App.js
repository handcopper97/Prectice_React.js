import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };
  getMovies = async () => {
    const movie = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
      const {isLoading}=this.state;
      
      return <h1>{isLoading ? "Loading..." : "We are ready!!"}</h1>
      
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
