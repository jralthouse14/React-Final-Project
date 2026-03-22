import React, {useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom';
import Nav from '../../components/Navigation/Nav'
import Footer from '../../components/Footer/Footer'
import './Browse.css'
import { FaClapperboard, FaMagnifyingGlass } from 'react-icons/fa6';
import MovieSort from '../../components/MovieSort/MovieSort';
import MovieList from '../../components/MovieList/MovieList';


const Browse = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const [input, setInput] = useState(initialQuery);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(input);
        setSearchParams({ q: input })
    };

    const [sortType, setSortType] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, [movies]);

    useEffect(() => {
        if (searchTerm || initialQuery) {
            fetch(`https://omdbapi.com/?s=${searchTerm || initialQuery}&apikey=e2320e00`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search || data.results || []);
            })
            .catch(error => console.error("Error fetching movies:", error));
        } else {
            setMovies([]);
        }
    }, [searchTerm, initialQuery]);

    const sortedMovies = useMemo(() => {
        const sorted = [...movies].sort((a, b) => {
            if (sortType === 'newest') {
                return b.Year - a.Year;
            } else if (sortType === 'oldest') {
                return a.Year - b.Year;
            }
            else if (sortType === 'a-z') {
                return a.Title.localeCompare(b.Title);
            }
            else if (sortType === 'z-a') {
                return b.Title.localeCompare(a.Title);
            }
            return 0;
        });
        return sorted;
    }, [movies, sortType]);

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
    <div>
        <Nav />
        <div className="browse__body">
                <h1 className="browse__header">Browse our Movies</h1>
            <div className="search__container">
                <div className="search">
                    <form className="search-movies" action="#" method="get" role="search" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search movies by title or keyword"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button className="search__submit fa-magnifying-glass" type="submit"><FaMagnifyingGlass /></button>
                    </form>
                </div>
            </div>
            <div className="row__main">
                <div className="row__results">
                    <h2 className="results__text">Search results: <span className="searchName">{searchTerm || initialQuery}</span></h2>
                </div>
                <MovieSort setSortType={setSortType} />
            </div>
            <div className="movies__results">
                <MovieList movies={sortedMovies} />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Browse
