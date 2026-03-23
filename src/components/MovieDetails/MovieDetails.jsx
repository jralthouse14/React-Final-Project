import React, { useState, useEffect } from 'react'
import "./MovieDetails.css"
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { FaClapperboard } from 'react-icons/fa6';
import Footer from '../Footer/Footer';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const API_KEY = "e2320e00";
  const [isLoading, setIsLoading] = useState(true);
   const addDefaultImg = (ev) => {
    ev.target.src = "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg";
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
    .then(response => response.json())
    .then(data => setMovie(data));
  }, [id]);

   if (isLoading) {
        return (
          <>
          <div className="loading__movieDetails">
              <h1 className="loading__movies--message2">Loading...</h1>
              <div className="loading__camera--container2">
              <figure className="camera__figure2">
                  <FaClapperboard className="loading__camera2" />
              </figure>
              <figure className="camera__figure2">
                  <FaClapperboard className="loading__camera2" />
              </figure>
              <figure className="camera__figure2">
                  <FaClapperboard className="loading__camera2" />
              </figure>
              </div>
          </div>
          <Footer />
          </>
        )
      }



  return (
    <>
    <div className="movie-container">
      <Link to = "/browse">
      <button className="back-button" onClick={() => navigate(-1)}>BROWSE MORE MOVIES</button>
      </Link>
      <h1 className="title__details">{movie.Title}</h1>
      <div className="movie-details">
          <img className="movie-image" src={movie.Poster} alt={movie.Title} onError={addDefaultImg} />
        <div className="movie-description">
          <p className="credits"><b>Released: </b> {movie.Year}</p>
          <p className="plot">{movie.Plot}</p>
          <p className="credits"><b>Director:</b> {movie.Director}</p>
          <p className="credits"> <b>Starring:</b> {movie.Actors}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default MovieDetails
