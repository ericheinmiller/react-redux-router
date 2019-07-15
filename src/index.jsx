import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './js/components/app';
import Reducers from './js/reducers/index';
import './css/index.scss';

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-container'),
);

if (typeof (module.hot) !== 'undefined') {
  module.hot.accept();
}
