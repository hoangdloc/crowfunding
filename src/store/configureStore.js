import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { reducer } from './reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
});
sagaMiddleware.run(rootSaga);
