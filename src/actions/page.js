import {
  SET_PAGE,
  SET_PROFILE_LOGIN
 } from './types'

import {getProfile} from './profile'

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page
})

export const setProfilePage = (login) =>{
  alert(login)
setPage('profile')
setProfileLogin('login')
getProfile(login)
}

export const setProfileLogin = (login) => ({
    type: SET_PROFILE_LOGIN,
    payload: login
})
