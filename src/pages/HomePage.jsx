import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/moviesSlice.js';
import MovieList from '../features/movies/MovieList.jsx';
import '../styles/home.css'; 

function HomePage() {
  const dispatch = useDispatch();
  const allMovies = useSelector(state => state.movies.allMovies);
  const moviesStatus = useSelector(state => state.movies.status);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    if (moviesStatus === 'idle') {
      dispatch(fetchMovies());
    }
  }, [moviesStatus, dispatch]);

  let content;
  if (moviesStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (moviesStatus === 'succeeded') {
    content = <MovieList movies={allMovies} />;
  } else if (moviesStatus === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>All Movies</h2>
      {content}
    </div>
  );
}

export default HomePage;