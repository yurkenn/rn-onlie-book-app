import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export const favoriteSelector = state => state.favorite;
export default favoriteSlice.reducer;
