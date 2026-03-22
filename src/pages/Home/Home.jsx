import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navigation/Nav';
import { FaClapperboard, FaMagnifyingGlass, FaVideo } from 'react-icons/fa6';

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    navigate(`/browse?q=${query}`);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
    <>
    <Nav />
        <div className="loading__movies">
            <h1 className="loading__movies--message">Loading...</h1>
            <div className="loading__camera--container">
            <figure className="camera__figure">
                <FaClapperboard className="loading__camera" />
            </figure>
            <figure className="camera__figure">
                <FaClapperboard className="loading__camera" />
            </figure>
            <figure className="camera__figure">
                <FaClapperboard className="loading__camera" />
            </figure>
            </div>
        </div>
    <Footer />
    </>
    )
  }

  return (
    <>
    <div>
      <Nav />
      <div className="home__container">
        <div className="video__image">
          <FaVideo className="video__image--font" />
        </div>
        <div className="home__body">
          <h1 className="welcome__message">Welcome to the best website for browsing movies and TV entertainment!!</h1>
            <form className="search-movies1" action="#" method="get" role="search" onSubmit={handleSubmit}>
              <input
              type="text"
              className="search-input1"
              placeholder="Search here to begin browsing..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button className="search__submit1 fa-magnifying-glass" type="submit"><FaMagnifyingGlass /></button>
            </form>
          </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Home
