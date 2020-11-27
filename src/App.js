import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header.js'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div className="container">
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
