import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';
import {Link} from 'react-router-dom';

function Movie({year, title, summary, poster, genres}) {
  return (
    <div className="movie">
      <Link 
        to={{
          pathname: '/movie-detail',
          state: {year, title, summary, poster, genres}
        }}
      >
       <img className="movie__img" src={poster} alt={title} title={title} />
      <div className="movie__data">
       <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <div className="summary__container">
          <p className="movie__summary">{summary.slice(0, 120)}...</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;