import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../../types/models/films';
import { fetchFilmsByGenre } from '../../services/filmServices/filmService';
import { fetchGenresAction } from './genresSlice';
import { RootState } from '../store';

interface FilmsState {
  data: { [genreName: string]: Film[] };
  loading: boolean;
  error: string | null;
}

const initialState: FilmsState = {
  data: {},
  loading: false,
  error: null,
};

export const fetchFilmsByGenreAction = createAsyncThunk(
  'filmsByGenre/fetchFilmsByGenreAction',
  async (genre: { id: number; name: string }, { getState }) => {
    const response = await fetchFilmsByGenre({
      lang: 'en-US',
      genreId: genre.id,
    });

    return { genre: genre.name, films: response };
  }
);

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsByGenreAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilmsByGenreAction.fulfilled, (state, action) => {
        state.loading = false;

        const { genre, films } = action.payload;
        state.data[genre] = films;
      })
      .addCase(fetchFilmsByGenreAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch films';
      });
  },
});

export default filmsSlice.reducer;
