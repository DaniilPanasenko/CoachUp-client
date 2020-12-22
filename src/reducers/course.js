import {
  SET_COURSE_INFO
} from '../actions/types'

const initialState = {
  courseInfo:{}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_INFO:
      return {
        ...state,
        courseInfo:action.payload
      }
    default:
      return state
  }
}
