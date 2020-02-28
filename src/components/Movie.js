import React from 'react';
import PropTypes from 'prop-types';

function Movie({id , year, title, summary, poster}){
    return (
        <div class="col">
            <div class="card mt-3" style={{ width: '18rem' }}>
            <img src={poster} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <small>{id}</small>
                    <p>{year}</p>
                    <p class="card-text">{summary.slice(0,140)}...</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;