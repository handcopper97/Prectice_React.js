import React from 'react';
import Proptypes from 'prop-types';

function Movie({id, title, year, image, rating}){
    return (<h4>{title}</h4>);
}

Movie.Proptypes = {
    id:Proptypes.number.isRequired,
    title:Proptypes.string.isRequired,
    year:Proptypes.string.isRequired,
    image:Proptypes.string.isRequired,
    rating:Proptypes.number.isRequired
}

export default Movie;