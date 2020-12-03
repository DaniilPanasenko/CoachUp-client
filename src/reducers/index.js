import { combineReducers } from 'redux'

import language from './language'
import user from './user'
import page from './page'

export default combineReducers(
  {
    language: language,
    user: user,
    page: page
  })
