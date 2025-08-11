import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../features/movies/MovieList.jsx';
import '../styles/top10.css'; // New path

function Top10Page() {
  const top10Movies = useSelector(state => state.movies.top10Movies);
  const moviesStatus = useSelector(state => state.movies.status);

  return (
    <div>
      <h2>Top 10 Movies</h2>
      {moviesStatus === 'succeeded' ? (
        <MovieList movies={top10Movies} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Top10Page;