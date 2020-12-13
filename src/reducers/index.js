import { combineReducers } from 'redux'

import language from './language'
import user from './user'
import page from './page'
import sport from './sport'
import profile from './profile'

export default combineReducers(
  {
    language: language,
    user: user,
    page: page,
    sport: sport,
    profile: profile
  })
