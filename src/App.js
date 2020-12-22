import React, { useEffect, useState }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import 'flag-icon-css/css/flag-icon.css'
import axios from 'axios'
import store from './store'
import logo from './logo.svg';
import './App.css';
import { messages as messagesUk} from './locales/uk/messages.js'
import { messages as messagesEn} from './locales/en/messages.js'
import { messages as messagesRu} from './locales/ru/messages.js'
import Header from './components/layout/header/Header'
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import Profile from './components/profile/Profile'
import MyCoursesList from './components/courses/MyCoursesList'
import Admin from './components/admin/Admin'
import Course from './components/course/Course'
import browserHistory from 'history/createBrowserHistory'
const history =browserHistory();

i18n.load('ru',messagesRu)
i18n.load('uk',messagesUk)
i18n.load('en',messagesEn)
i18n.activate('en')

function App() {
  return (
    <I18nProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <React.Fragment>
          <Header history={history}/>
          <Switch>
            <Route history={history} path='/signin' component={SignIn} />
            <Route history={history} path='/signup' component={SignUp} />
            <Route history={history} path='/profile/:login' component={Profile} />
            <Route history={history} path='/courses' component={MyCoursesList} />
            <Route history={history} path='/course/:id' component={Course} />
            <Route history={history} path='/admin' component={Admin} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
    </I18nProvider>
  );
}

export default App;
