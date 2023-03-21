import React from 'react';
import Layout from '../Layout/Layout';
import Banner from '../Components/Home/Banner';
import TopMovies from '../Components/Home/TopMovies';

function HomeScreen() {
  return (
    <Layout>
      <Banner />
      <TopMovies />
    </Layout>
  );
}

export default HomeScreen;
