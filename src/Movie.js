import React from 'react';
import Proptypes from 'prop-types';
import "./Movie.css";

function Movie({title, year, image, rating, summary, genres}){
    return (
        <div className="movie">
            <img src={image} title={title} alt={title} />
            <div className="movie__data">
                <h3 className="movie__data__title_year">{title}({year})</h3>
                <h4 className="movie__data__rating">{rating}/10점</h4>
                <ui className="genres">{genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                ))}
                </ui>
                <p className="movie__data__summary">{summary}</p>
            </div>
            
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