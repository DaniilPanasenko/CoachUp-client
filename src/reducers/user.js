import {
  SET_LANGUAGE,
  SET_CURRENT_USER,
  SET_LOGIN_EXCEPTION,
  LOGOUT
} from '../actions/types'

function getInitialState(){
  if(sessionStorage.getItem('login')!=null){
    return sessionStorage.getItem('login')
  }
  return null
}

const initialState = {
  isAuthorized: getInitialState()!=null,
  login: getInitialState(),
  isCoach: false,
  avatar: null,
  loginException: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      sessionStorage.setItem('login', action.payload)
      return {
        ...state,
        isAuthorized: true,
        login: action.payload
      }
      break;
    case SET_LOGIN_EXCEPTION:
      return{
        ...state,
        loginException: action.payload
      }
      break;
    case LOGOUT:
      sessionStorage.removeItem('login')
      return{
        ...state,
        login: null,
        isAuthorized: false
      }
    default:
      return state
  }
}
