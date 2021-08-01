import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './reducers/index';
import { createBook } from './actions/index';

const initialState = [
  {
    bookId: Math.floor(Math.random() * 1000),
    title: 'Siddartha',
    category: 'Biography',
  },
  {
    bookId: Math.floor(Math.random() * 1000),
    title: 'Doors of perception',
    category: 'Learning',
  },
  {
    bookId: Math.floor(Math.random() * 1000),
    title: 'Divine Comedy',
    category: 'Comedy',
  },
];

initialState.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
