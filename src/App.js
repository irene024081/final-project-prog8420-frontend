import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import NotFound from './Screens/NotFound';
import MoviePage from './Screens/MoviePage';
import SingleMovie from './Screens/SingleMovie';
import ContactUs from './Screens/ContactUs';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';
import Password from './Screens/Dashboard/Password';
import ToWatchMovies from './Screens/Dashboard/ToWatchMovies';
import WatchedList from './Screens/Dashboard/WatchedList';
import { Movies } from './Data/MovieData';
import WatchList from './Screens/Dashboard/WatchList';

function App() {
  const [FetchedMovies, setFetchedMovies] = useState([Movies]);
  const getMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch('http://watchmate.jiakuan.xyz/movie/');
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setFetchedMovies(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getMoviesHandler();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/to-watch" element={<ToWatchMovies />} />
      <Route path="/watched" element={<WatchedList />} />
      <Route path="/password" element={<Password />} />
      <Route path="/movie/:id" element={<SingleMovie movies={Movies} />} />
      <Route
        path="/single-watchlist"
        element={<WatchList Movies={Movies.slice(0, 5)} />}
      />
    </Routes>
  );
}

export default App;
