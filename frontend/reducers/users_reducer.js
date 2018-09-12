import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:{
      const newState = merge({}, state, { [action.user.id]: action.user });
      return newState;
    }
    default:
      return state;
  }
}
