import axios from 'axios'

export const getUsers = () => (dispatch) => {
  axios
    .get('https://localhost:5001/system/query/all_users/')
    .then((res) => {
        dispatch(setUsers(res.data));
      }
    )
}

export const setUsers = (users) => ({
  type: 'ADMIN_USERS',
  payload: users
})

export const ban = (login) => ({
  type: 'ADMIN_USER_BAN',
  payload: login
})
