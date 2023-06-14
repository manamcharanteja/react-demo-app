import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AppReducer from '../reducer';

const logger = createLogger();

const middleware = [thunkMiddleware, logger];

const store = createStore(
  AppReducer,
  compose(applyMiddleware(...middleware)),
);
export default store;
