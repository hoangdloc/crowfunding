import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    accessToken: null
  },
  reducers: {
    authLogin: (state, action) => {
      state.user = action.payload;
    },
    authRegister: (state, action) => {
      state.user = action.payload;
    },
    authUpdateUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    authFetchMe: (state, action) => {
      state.user = action.payload;
    },
    authRefreshToken: () => {},
    authLogout: () => {}
  }
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogout
} = authSlice.actions;
export default authSlice.reducer;
