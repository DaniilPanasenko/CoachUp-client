import {
  SET_MY_COURSES_LIST
} from '../actions/types'

const initialState = {
  courses:[]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_COURSES_LIST:
      return {
        ...state,
        courses:action.payload
      }
    default:
      return state
  }
}
