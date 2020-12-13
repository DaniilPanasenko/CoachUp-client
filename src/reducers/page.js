import {
  SET_PAGE,
  SET_PROFILE_LOGIN
} from '../actions/types'

import {setProfilePage} from '../actions/page'

function getInitialPage(){
  if(sessionStorage.getItem('page')!=null){
    return sessionStorage.getItem('page')
  }
  return 'signin'
}

function getInitialLoginProfile(){
  if(sessionStorage.getItem('profileLogin')!=null){
    setProfilePage(sessionStorage.getItem('profileLogin'))
    return sessionStorage.getItem('profileLogin')
  }
  return null
}

const initialState = {
  page: getInitialPage(),
  profileLogin: getInitialLoginProfile()
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      alert('setpage')
      sessionStorage.setItem('page', action.payload)
      return {
        ...state,
        page: action.payload
      }
    case SET_PROFILE_LOGIN:
      sessionStorage.setItem('profileLogin', action.payload)
      return {
        ...state,
        profileLogin: action.payload
      }
    default:
      return state
  }
}
