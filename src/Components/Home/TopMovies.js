import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import Movie from '../Movie';
import { Movies } from '../../Data/MovieData';

function TopMovies() {
  const [RealMovies, setRealMovies] = useState([Movies]);

  const getMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/movie/');
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setRealMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [RealMovies]);

  useEffect(() => {
    getMoviesHandler();
  }, []);

  return (
    <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {Movies.slice(0, 8).map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
}

export default TopMovies;
