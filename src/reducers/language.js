import {
  SET_LANGUAGE
} from '../actions/types'
import { i18n } from '@lingui/core'

const initialState = {
  language : "en"
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      switch (action.payload){
        case 'ru':
          i18n.activate('ru');
          break;
        case 'uk':
          i18n.activate('uk');
          break;
        case 'en':
          i18n.activate('en');
          break;
      }
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}
