import React from 'react'
import './MovieSort.css'

const MovieSort = ({ setSortType }) => {
  const handleChange = (event) => {
    setSortType(event.target.value);
  };

  return (
    <div className="sort">
        <select name="movieSort" id="movieSort" onChange={handleChange}>
            <option disabled selected value="">Sort by...</option>
            <option value="newest">New to Old</option>
            <option value="oldest">Old to New</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>
    </div>
  );
}

export default MovieSort

