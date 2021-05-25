/* ============ */
  // react depends
/* ============ */
import React from 'react';
import ReactDOM from 'react-dom';

/* main component */
import App from './App';

/* ============ */
  // components
/* ============ */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore(function(state = [], action) {
  return state;
});



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
