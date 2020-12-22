import axios from 'axios'
import {
  SET_COURSE_INFO,
  SET_TRAININGS_LIST
} from './types'

export const getInfo = (id) => (dispatch) => {
  axios
    .get('https://localhost:5001/course/info/'+id)
    .then((res) => {
        dispatch(setInfo(res.data));
      }
    )
}

export const getTrainingsList = (id) => (dispatch) => {
  axios
    .get('https://localhost:5001/course/trainingslist/'+id)
    .then((res) => {
        dispatch(setTrainingsList(res.data));
    });
};

export const addTraining = (trainingData, courseId) => (dispatch) => {
  axios
    .post('https://localhost:5001/course/training/'+courseId, trainingData, {withCredentials: true})
    .then((res) => {
      dispatch(getTrainingsList(courseId));
    });
};

export const setTrainingsList = (trainings) => ({
  type: SET_TRAININGS_LIST,
  payload: trainings
});

export const setInfo = (info) => ({
  type: SET_COURSE_INFO,
  payload: info
})
