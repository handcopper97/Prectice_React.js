import React from 'react';
import Proptypes from 'prop-types';
import "./Movie.css";
function Movie({title, year, image, rating, summary}){
    return (
        <div class="movie">
            <img src={image} title={title} alt={title} />
            <div class="movie__data">
                <h3 class="movie__data__title">{title}</h3>
                <h4 class="movie__data__year">{year}</h4>
                <h4 class="movie__data__title__rating">{rating}점</h4>
                <h5 class="movie__data__summary">{summary}</h5>
            </div>
            
        </div>
    );
}

Movie.Proptypes = {
    id:Proptypes.number.isRequired,
    title:Proptypes.string.isRequired,
    year:Proptypes.string.isRequired,
    image:Proptypes.string.isRequired,
    rating:Proptypes.number.isRequired,
    summary:Proptypes.string.isRequired
}

export default Movie;