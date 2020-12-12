import axios from 'axios'
import {
  GET_SPORTS
} from './types'

export const getSports = () => (dispatch) => {
  axios
    .get('https://localhost:5001/system/sportslist')
    .then((res) => {
          dispatch(sportsList(res.data))
      }
    )
}

export const sportsList = (sports) => ({
  type: GET_SPORTS,
  payload: sports
})
