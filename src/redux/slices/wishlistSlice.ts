import { createSlice } from '@reduxjs/toolkit';
import { Film } from '../../types/models/films';

interface WishlistState {
  data: Film[];
}

const initialState: WishlistState = {
  data: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.data.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.data.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.data = state.data.filter((film) => film.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
