import axios from 'axios'
import {
  SET_TRAINING_INFO
} from './types'

export const getInfo = (id) => (dispatch) => {
  axios
    .get('https://localhost:5001/training/info/'+id)
    .then((res) => {
        dispatch(setInfo(res.data));
      }
    )
}

export const setInfo = (info) => ({
  type: SET_TRAINING_INFO,
  payload: info
})
