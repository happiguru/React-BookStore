import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './default/index';
import { createBook } from './actions/index';
import combineReducers from './reducers/index';
import App from './components/App';

const store = createStore(
  combineReducers,
);

initialState.map((book) => store.dispatch(createBook(book)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
