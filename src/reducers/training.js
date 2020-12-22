import {
  SET_TRAINING_INFO
} from '../actions/types'

const initialState = {
  courseInfo:{}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAINING_INFO:
      return {
        ...state,
        trainingInfo:action.payload
      }
    default:
      return state
  }
}
