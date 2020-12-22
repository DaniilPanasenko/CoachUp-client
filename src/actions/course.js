import axios from 'axios'
import { SET_COURSE_INFO} from './types'

export const getInfo = (id) => (dispatch) => {
  axios
    .get('https://localhost:5001/course/info/'+id)
    .then((res) => {
        dispatch(setInfo(res.data));
      }
    )
}

export const setInfo = (info) => ({
  type: SET_COURSE_INFO,
  payload: info
})
