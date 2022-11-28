// create store redux toolkit
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import favoriteReducer from './favoriteSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
