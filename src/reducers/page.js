import {
  SET_PAGE
} from '../actions/types'

function getInitialState(){
  if(sessionStorage.getItem('page')!=null){
    return sessionStorage.getItem('page')
  }
  return 'signin'
}

const initialState = {
  page: getInitialState()
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      sessionStorage.setItem('page', action.payload)
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}
