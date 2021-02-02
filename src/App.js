import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About'; 
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App(){
    return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/About" exact={true} component={About}/>
      </HashRouter>
      );
}

export default App;

/*

import axios from 'axios';
import React from 'react';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies:movies, isLoading:false})
  };
  componentDidMount(){
    this.getMovies();
    
  }
  render(){
      const {isLoading, movies}=this.state;
      return <h1>{isLoading ? "Loading..."
       : movies.map(movies => 
        {
         return <Movie 
            key={movies.id} 
            id={movies.id} 
            title={movies.title} 
            yaer={movies.year} 
            image={movies.medium_cover_image} 
            rating={movies.rating} 
            />
      })}
      </h1>
      
      }
}

export default App;
*/






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
