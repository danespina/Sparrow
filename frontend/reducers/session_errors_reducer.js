import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:{
      const newState = state.concat(action.errors);
      return newState;
    }
    default:
      return state;
  }
}
