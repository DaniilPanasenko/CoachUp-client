import {
  SET_PROFILE
} from '../actions/types'

const initialState = {
  name: null,
  surname: null,
  sex: null,
  sport: null,
  ratePoints: 0,
  ratePlace: 0,
  countFriends: 0,
  countSubscribes: 0,
  countSubscribers: 0,
  login: null,
  isCoach: null,
  avatar: null,
  aboutMe: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        isCoach: action.payload.isCoach,
        name: action.payload.name,
        surname: action.payload.surname,
        sex: action.payload.sex,
        sport:
          action.payload.isCoach?
          action.payload.sport : action.payload.sports,
        rate: action.payload.rate,
        countFriends:
          action.payload.isCoach?
          null : action.payload.count_Friends,
        countSubscribes:
          action.payload.isCoach?
          null : action.payload.count_Subscribes,
        countSubscribers:
          action.payload.isCoach?
          action.payload.count_Subscribers : null,
        login: action.payload.login,
        avatar: action.payload.avatar,
        aboutMe: action.payload.aboutMe,
        ratePoints: action.payload.rate.points,
        ratePlace: action.payload.rate.place,
      }
    default:
      return state
  }
}
