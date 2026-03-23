import React from 'react'
import './MovieList.css'
import { Link } from 'react-router-dom';

const MovieList = ({ movie }) => {
  const addDefaultImg = (ev) => {
    ev.target.src = "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg";
  };
  


  return (
    <div className="movie-list">
      {movie.slice(0, 6).map(movie => (
        <div key={movie.imdbID} className="movie-card" >
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster}
            alt={movie.Title}
            onError={addDefaultImg}
            />
            <h3 className="movie__title">{movie.Title}</h3>
            <p className="movie__title">{movie.Year}</p>
            <button className="learn-more">Learn More</button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList
