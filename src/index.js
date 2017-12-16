import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Main from "./Main";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import thunkMiddleware from 'redux-thunk';

import allReducers from './reducers/index.js';
import {Provider} from 'react-redux';

const store = createStore(allReducers,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>, 
  document.getElementById("root")
);