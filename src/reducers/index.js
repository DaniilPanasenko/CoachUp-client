import { combineReducers } from 'redux'

import language from './language'
import user from './user'
import sport from './sport'
import profile from './profile'
import myCoursesList from './myCoursesList'
import admin from './admin'
import course from './course'
import training from './training'

export default combineReducers(
  {
    language: language,
    user: user,
    sport: sport,
    profile: profile,
    myCoursesList: myCoursesList,
    admin: admin,
    course: course,
    training: training
  })
