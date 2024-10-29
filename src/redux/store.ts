import { configureStore } from '@reduxjs/toolkit';
import filmsByGenreReducer from './slices/filmsByGenreSlice';
import genresReducer from './slices/genresSlice';
import filmDetailReducer from './slices/filmDetailSlice';
import wishlistReducer from './slices/wishlistSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filmsByGenre', 'genres', 'wishlist'],
};

const rootReducer = combineReducers({
  filmsByGenre: filmsByGenreReducer,
  genres: genresReducer,
  filmDetail: filmDetailReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
