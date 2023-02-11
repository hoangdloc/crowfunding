import authSlice from './auth/auth-slice';

const { combineReducers } = require('@reduxjs/toolkit');

export const reducer = combineReducers({
  auth: authSlice
});
