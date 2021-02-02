import React from 'react';
import Proptypes from 'prop-types';
import "./Movie.css";
import {Link} from 'react-router-dom';



function Movie({id, title, year, image, rating, summary, genres}){
    console.log("Movies실행됨");
    return (
        
        <div className="movie">
            <Link to={{
                pathname:`/movie/${id}`,
                state:{
                    id,
                    title,
                    year,
                    image,
                    summary,
                    genres
                }
            }}>
            <img src={image} title={title} alt={title} />
            <div className="movie__data">
                <h3 className="movie__data__title">{title}<span className="movie__year">({year})</span></h3>
                <h4 className="movie__data__year">{rating}/10점</h4>
                <ul className="genres">{genres.map((genre, index) => (
                    <li key={index} className="genres__genre">ㆍ{genre}</li>
                ))}
                </ul>
                <br />
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
            
        
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id:Proptypes.number.isRequired,
    title:Proptypes.string.isRequired,
    year:Proptypes.number.isRequired,
    image:Proptypes.string.isRequired,
    rating:Proptypes.number.isRequired,
    summary:Proptypes.string.isRequired,
    genres:Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;

