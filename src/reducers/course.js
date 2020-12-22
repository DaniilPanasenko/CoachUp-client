import {
  SET_COURSE_INFO,
  SET_TRAININGS_LIST
} from '../actions/types'

const initialState = {
  courseInfo:{},
  trainings:[]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_INFO:
      return {
        ...state,
        courseInfo:action.payload
      }
    case SET_TRAININGS_LIST:
      return{
        ...state,
        trainings:action.payload
      }
    default:
      return state
  }
}
