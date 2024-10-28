import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../../types/models/films';
import { fetchFilmsByGenre } from '../../services/filmServices/filmService';
import { fetchGenresAction } from './genresSlice';
import { RootState } from '../store';

interface FilmsState {
  films: Film[];
  loading: boolean;
  error: string | null;
}

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
};

export const fetchFilmsByGenreAction = createAsyncThunk(
  'films/fetchFilmsByGenreAction',
  async (genresIds: number[]) => {
    const response = await fetchFilmsByGenre({
      lang: 'en-US',
      genreIds: genresIds,
    });
    return response;
  }
);

export const fetchGenresAndFilmsAction = createAsyncThunk<
  void,
  string[],
  { state: RootState }
>(
  'films/fetchGenresAndFilmsAction',
  async (genresNames, { dispatch, getState }) => {
    await dispatch(fetchGenresAction());
    const genres = getState().genres.data;
    const genresIds = genres
      .filter((genre: any) => genresNames.includes(genre.name))
      .map((i: any) => i.id);
    dispatch(fetchFilmsByGenreAction(genresIds));
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
        state.films = action.payload;
      })
      .addCase(fetchFilmsByGenreAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch films';
      });
  },
});

export default filmsSlice.reducer;
