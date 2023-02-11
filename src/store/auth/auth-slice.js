import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined
  },
  reducers: {
    authLogin: (state, action) => {
      state.user = action.payload;
    },
    authRegister: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { authLogin, authRegister } = authSlice.actions;
export default authSlice.reducer;
