import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGenreList } from '../../services/genreServices/genreService';
import { Genre } from '../../types/models/genre';

interface GenreState {
  data: { [name: string]: number };
  loading: boolean;
  error: string | null;
}

const initialState: GenreState = {
  data: {},
  loading: false,
  error: null,
};

export const fetchGenresAction = createAsyncThunk(
  'genres/fetchGenresAction',
  async () => {
    //fake delay: await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetchGenreList({ lang: 'en-US' });
    return response;
  }
);

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenresAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGenresAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch genres';
      });
  },
});

export default genresSlice.reducer;
