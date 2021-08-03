import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import initialState from './default/index';
import { createBook } from './actions/index';
// import books from './reducers/books';
import App from './components/App';
import store from './reducers/index';

// const store = createStore(books, initialState);

initialState.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
