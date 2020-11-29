import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'flag-icon-css/css/flag-icon.css'

import store from './store'

import logo from './logo.svg';
import './App.css';

import HeaderTrainee from './components/layout/HeaderTrainee.js'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <HeaderTrainee />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
