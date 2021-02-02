import axios from 'axios';
import React from 'react';
import Movie from '.././components/Movie';
import "./Home.css";

class Home extends React.Component{
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
    console.log("Home실행됨");
      const {isLoading, movies}=this.state;
      return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
         { movies.map(movies => 
         (
           <Movie 
             key={movies.id} 
             id={movies.id}
             title={movies.title} 
             year={movies.year} 
             image={movies.medium_cover_image} 
             rating={movies.rating} 
             summary={movies.summary}
             genres={movies.genres}
          /> 
         ))}
        </div>
        )}
      </section>
      }
}

export default Home;