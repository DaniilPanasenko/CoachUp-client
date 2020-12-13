import axios from 'axios'
import {
  SET_PROFILE
} from './types'
import {setPage} from './page'
import {setProfileLogin} from './page'

export const getProfile = (login) => (dispatch) => {
  axios
    .get('https://localhost:5001/profile/info/'+login)
    .then((res) => {
        res.data.login = login;
        dispatch(setProfile(res.data));
        dispatch(setProfileLogin(login));
      }
    )
}

export const setProfile = (userData) => ({
  type: SET_PROFILE,
  payload: userData
})
