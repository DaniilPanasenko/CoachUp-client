import {
  SET_LANGUAGE,
  SET_CURRENT_USER,
  SET_LOGIN_EXCEPTION,
  LOGOUT,
  SET_SHORT_PROFILE
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
    case LOGOUT:
      sessionStorage.removeItem('login')
      return{
        ...state,
        login: null,
        isAuthorized: false
      }
    case SET_SHORT_PROFILE:
    return{
      ...state,
      avatar: action.payload.avatar,
      isCoach: action.payload.isCoach
    }
    default:
      return state
  }
}
