import { combineReducers, createStore } from 'redux';
import booksReducer from './books';

const store = createStore(
  combineReducers({ books: booksReducer }),
);
export default store;
