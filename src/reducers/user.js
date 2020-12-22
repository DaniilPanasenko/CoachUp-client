import {
  SET_LANGUAGE,
  SET_CURRENT_USER,
  SET_LOGIN_EXCEPTION,
  LOGOUT,
  SET_SHORT_PROFILE,
  SET_REGISTRATION_EXCEPTION,
  AFTER_LOGOUT
} from '../actions/types'

function getInitialState(){
  if(sessionStorage.getItem('login')!=null){
    return sessionStorage.getItem('login')
  }
  return null
}

function getInitialIsCoach(){
  if(sessionStorage.getItem('isCoach')!=null){
    return sessionStorage.getItem('isCoach')
  }
  return false
}

const initialState = {
  isAuthorized: getInitialState()!=null,
  login: getInitialState(),
  isCoach: getInitialIsCoach(),
  avatar: null,
  loginException: null,
  registrationException: null,
  logout: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      sessionStorage.setItem('login', action.payload)
      return {
        ...state,
        isAuthorized: true,
        login: action.payload,
        loginException: null
      }
      break;
    case SET_LOGIN_EXCEPTION:
      return{
        ...state,
        loginException: action.payload
      }
      break;
    case SET_REGISTRATION_EXCEPTION:
      return{
        ...state,
        registrationException: action.payload
      }
      break;
    case LOGOUT:
      sessionStorage.removeItem('login')
      sessionStorage.removeItem('isCoach')
      return{
        ...state,
        login: null,
        isAuthorized: false,
        loginException: null,
        registrationException: null,
        logout: true
      }
    case AFTER_LOGOUT:
      return{
        ...state,
        logout: false
      }
    case SET_SHORT_PROFILE:
    sessionStorage.setItem('isCoach', action.payload.isCoach)
    return{
      ...state,
      avatar: action.payload.avatar,
      isCoach: action.payload.isCoach
    }
    default:
      return state
  }
}
