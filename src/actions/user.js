import axios from 'axios'
import {
  SET_LANGUAGE,
  SET_CURRENT_USER,
  SET_LOGIN_EXCEPTION,
  LOGOUT,
  SET_SHORT_PROFILE,
  SET_REGISTRATION_EXCEPTION,
  AFTER_LOGOUT
} from './types'
import {setProfilePage} from './page'
import {setProfileLogin} from './page'

export const login = (userData) => (dispatch) => {
  axios
    .post('https://localhost:5001/authentication/login', userData)
    .then((res) => {
        if(res.data=="OK"){
          dispatch(setCurrentUser(userData.login))
          setProfilePage(userData.login)
          dispatch(setShortProfile(userData.login))
        }
        else{
          dispatch(loginException(res.data))
        }
      }
    )
}

export const registration = (userData) => (dispatch) => {
  axios
    .post('https://localhost:5001/authentication/registration', userData)
    .then((res) => {
        if(res.data=="OK"){
          dispatch(setCurrentUser(userData.login))
          dispatch(setProfilePage(userData.login))
          dispatch(setShortProfile(userData.login))
        }
        else{
          dispatch(registrationException(res.data))
        }
      }
    )
}

export const setShortProfile = (login) => (dispatch) => {
  axios
    .get('https://localhost:5001/authentication/userinfo/'+login)
    .then((res) => {
        dispatch(shortProfile(res.data))
      }
    )
}
export const logout = () => ({
  type: LOGOUT
})

export const afterLogout = () => ({
  type: AFTER_LOGOUT
})

export const setCurrentUser = (login) => ({
  type: SET_CURRENT_USER,
  payload: login
})

export const loginException = (exception) => ({
  type: SET_LOGIN_EXCEPTION,
  payload: exception
})

export const registrationException = (exception) => ({
  type: SET_REGISTRATION_EXCEPTION,
  payload: exception
})

export const shortProfile = (info)=>({
  type: SET_SHORT_PROFILE,
  payload: info
})
