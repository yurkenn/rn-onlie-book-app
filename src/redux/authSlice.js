// create auth slice for redux

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuth: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
