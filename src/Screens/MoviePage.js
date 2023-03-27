import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Filters from '../Components/Filters';
import { Movies } from '../Data/MovieData';
import Movie from '../Components/Movie';
import { CgSpinner } from 'react-icons/cg';

function MoviePage() {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);
  //   const HandleLoadingMore = () => {
  //     setPage(page + maxPage);
  //   };
  return (
    <Layout>
      <Filters />
      <p className="text-lg font-medium my-6">
        Total <span className="font-bold text-subMain">{Movies?.length}</span>{' '}
        items Found
      </p>
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {Movies.slice(0, page)?.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </Layout>
  );
}

export default MoviePage;
