import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';

import { logOut, saveToken } from '../../utils/auth';
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister
} from './auth-requests';
import { authUpdateUser } from './auth-slice';

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success('Created new account successfully');
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}

function* handleAuthLogin(action) {
  try {
    const response = yield call(requestAuthLogin, action.payload);
    // accessToken & refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthfetchMe, response.data.accessToken);
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}

function* handleAuthfetchMe(action) {
  try {
    const response = yield call(requestAuthFetchMe, action.payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: action.payload
        })
      );
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}

function* handleAuthRefreshToken(action) {
  try {
    const response = yield call(requestAuthRefreshToken, action.payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthfetchMe, {
        payload: response.data.accessToken
      });
    } else {
      yield handleAuthLogout();
    }
  } catch (error) {}
}

function* handleAuthLogout() {
  yield put(authUpdateUser({}));
  logOut();
}

export {
  handleAuthLogin,
  handleAuthfetchMe,
  handleAuthRefreshToken,
  handleAuthLogout
};
