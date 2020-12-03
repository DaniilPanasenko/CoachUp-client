import axios from 'axios'
import {
  SET_LANGUAGE,
  SET_CURRENT_USER,
  SET_LOGIN_EXCEPTION,
  LOGOUT,
  SET_SHORT_PROFILE
} from './types'
import {setPage} from './page'

export const login = (userData) => (dispatch) => {
  axios
    .post('https://localhost:5001/authentication/login', userData)
    .then((res) => {
        if(res.data=="OK"){
          dispatch(setCurrentUser(userData.Login))
          dispatch(setPage('profile'))
        }
        else{
          dispatch(loginException(res.data))
        }
      }
    )
}
/*
export const setShortProfile = (login) =>
{
  axios
    .get('https://localhost:5001/authentication/userinfo/'+login, userData)
    .then((res) => {
        dispatch
      }
    )
}*/
export const logout = () => ({
  type: LOGOUT
})

export const setCurrentUser = (login) => ({
  type: SET_CURRENT_USER,
  payload: login
})

export const loginException = (exception) => ({
  type: SET_LOGIN_EXCEPTION,
  payload: exception
})
/*
export const shortProfile = (info)=>({
  type: SET_SHORT_PROFILE,
  payload: exception
})*/
