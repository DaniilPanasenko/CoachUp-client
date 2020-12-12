import {
  GET_SPORTS
} from '../actions/types'

const initialState = {
  listSports: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPORTS:
      return {
        ...state,
        listSports: action.payload
      }
    default:
      return state
  }
}
