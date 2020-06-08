import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';

import index from './reducers/index';

const enhancers = () => {
  return ( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const celebrityStore = createStore(index
  , enhancers()
  );


ReactDOM.render(
  <Provider store={celebrityStore}>
    <Router>
      <App />
    </Router>
  </Provider>
,
	document.getElementById('root')
);

serviceWorker.unregister();
