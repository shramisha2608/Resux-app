import React from 'react';
import "../movies/movies.css";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;