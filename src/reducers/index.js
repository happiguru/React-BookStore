import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

<<<<<<< HEAD
const store = createStore(
  combineReducers({
    books: booksReducer,
    filter: filterReducer,
  }),
);
export default store;
=======
const allReducers = combineReducers({ books: booksReducer });

export default allReducers;
>>>>>>> milestone-three-feature-branch
