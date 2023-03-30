import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import Filters from '../Components/Filters';
import Movie from '../Components/Movie';
import { CgSpinner } from 'react-icons/cg';

function MoviePage(props) {
  const maxPage = 23;
  const [page, setPage] = useState(maxPage);
  const [currentMovie, setCurrentMovie] = useState(props.movies);
  const updateMovieHandler = updatedMovies => {
    setCurrentMovie(updatedMovies);
  };
  useEffect(() => {
    updateMovieHandler(currentMovie);
  }, [currentMovie]);

  return (
    <Layout>
      <Filters movies={currentMovie} updateMovie={updateMovieHandler} />
      <p className="text-lg font-medium my-6">
        Total{' '}
        <span className="font-bold text-subMain">{currentMovie?.length}</span>{' '}
        items Found
      </p>
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {currentMovie.slice(0, page)?.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </Layout>
  );
}

export default MoviePage;
