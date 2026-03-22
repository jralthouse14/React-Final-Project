import React from 'react'
import './MovieList.css'
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.slice(0, 6).map(movie => (
        <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>
            <button className="learn-more">Learn More</button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList
