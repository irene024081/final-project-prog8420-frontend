import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../Components/Home/Single/MovieInfo';
import MovieRates from '../Components/Home/Single/MovieRating';
import Layout from '../Layout/Layout';

function SingleMovie(props) {
  const { id } = useParams();
  const Movies = props.movies;
  const movie = Movies.find(movie => movie.name === id);
  return (
    <Layout>
      <MovieInfo movie={movie} />
      <MovieRates movie={movie}></MovieRates>
    </Layout>
  );
}

export default SingleMovie;
