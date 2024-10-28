import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './slices/filmsSlice';
import genresReducer from './slices/genresSlice';
import filmDetailReducer from './slices/filmDetailSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    genres: genresReducer,
    filmDetail: filmDetailReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
