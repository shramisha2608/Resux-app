import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '1fc5738d651550b4e0cee5a3c35ff77c';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    allMovies: [],
    top10Movies: [],
    flopMovies: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allMovies = action.payload;

        // Filter for top movies (rating 5 to 10)
        state.top10Movies = action.payload.filter(movie => movie.vote_average >= 5 && movie.vote_average <= 10)
                                          .sort((a, b) => b.vote_average - a.vote_average)
                                          .slice(0, 10);

        // Filter for flop movies (rating 1 to 5)
        state.flopMovies = action.payload.filter(movie => movie.vote_average >= 1 && movie.vote_average < 6)
                                          .sort((a, b) => a.vote_average - b.vote_average)
                                          .slice(0, 10);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;