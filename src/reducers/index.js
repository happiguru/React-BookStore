import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const store = createStore(
  combineReducers({
    books: booksReducer,
    filter: filterReducer,
  }),
);
export default store;
