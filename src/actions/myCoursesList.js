import axios from 'axios'
import {
  SET_MY_COURSES_LIST
} from './types'

export const getList = () => (dispatch) => {
  axios
    .get('https://localhost:5001/courseslist/courses', {withCredentials: true})
    .then((res) => {
        dispatch(setList(res.data));
      }
    )
}

export const addCourse = (courseData) => (dispatch) => {
  axios.post('https://localhost:5001/courseslist/addcourse', courseData, {withCredentials: true}).
  then((res)=>{
    dispatch(getList());
  }
  )
}

export const setList = (userData) => ({
  type: SET_MY_COURSES_LIST,
  payload: userData
})
