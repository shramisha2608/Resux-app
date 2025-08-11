import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../features/movies/MovieList.jsx';
import '../styles/flop.css'; // New path

function FlopMoviesPage() {
  const flopMovies = useSelector(state => state.movies.flopMovies);
  const moviesStatus = useSelector(state => state.movies.status);

  return (
    <div>
      <h2>Flop Movies</h2>
      {moviesStatus === 'succeeded' ? (
        <MovieList movies={flopMovies} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default FlopMoviesPage;