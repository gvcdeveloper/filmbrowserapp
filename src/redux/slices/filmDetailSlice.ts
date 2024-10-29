import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../../types/models/films';
import { fetchFilmByID } from '../../services/filmServices/filmService';

interface FilmDetailState {
  data: Omit<Film, 'imgUrl'> | null;
  loading: boolean;
  error: string | null;
}

const initialState: FilmDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchFilmByIDAction = createAsyncThunk(
  'filmDetail/fetchFilmByIDAction',
  async (filmID: number) => {
    const response = await fetchFilmByID({ id: filmID, lang: 'en-US' });
    return response;
  }
);

const filmDetailSlice = createSlice({
  name: 'filmDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmByIDAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilmByIDAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFilmByIDAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch film detail';
      });
  },
});

export default filmDetailSlice.reducer;
